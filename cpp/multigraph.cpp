#include <emscripten.h>
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <queue>
#include <cstdlib>
#include <algorithm>
#include <random>

typedef std::pair<unsigned, unsigned> FullNodeId;
typedef unsigned EdgeMeta;

struct node_id_hash {
    std::size_t operator() (const FullNodeId &id) const {
        return (id.first * 891409) ^ id.second;
    }
};


class Node {
public:
    Node(): edges(), goal(false) {
    }

    void set_goal(bool goal) {
        this->goal = goal;
    }

    bool is_goal() {
        return this->goal;
    }

    void mark_present() {
        this->present = true;
    }

    bool is_present() {
        return this->present;
    }

    std::vector<std::pair<FullNodeId, EdgeMeta>> edges;
private:
    bool goal;
    bool present;
};

class InnerGraph {
public:
    InnerGraph(unsigned n): nodes(n) {
    }

    Node* get_node(unsigned idx) {
        if (idx >= nodes.size()) {
            return nullptr;
        }
        return &nodes[idx];
    }

    std::vector<Node> nodes;
};

class ModuloMultigraph {
public:
    ModuloMultigraph(unsigned n) : graphs(), n(n) {
    }
    
    unsigned add_graph() {
        this->graphs.push_back(InnerGraph(this->n));
        return this->graphs.size() - 1;
    }

    Node* get_node(FullNodeId id) {
        if (id.first >= graphs.size()) {
            return nullptr;
        } else {
            return graphs[id.first].get_node(id.second);
        }
    }

    InnerGraph* get_graph(unsigned id) {
        if (id >= graphs.size()) {
            return nullptr;
        }
        return &graphs[id];
    }

    std::vector<InnerGraph> graphs;
private:
    unsigned n;
};

void* alloc_array(unsigned size) {
    unsigned* data = (unsigned*) malloc(sizeof(unsigned) * size + 1);
    data[0] = size;
    return data;
}


static ModuloMultigraph* instance = nullptr;

EMSCRIPTEN_KEEPALIVE
void start(unsigned n) {
    if (instance != nullptr) {
        delete instance;
    }
    instance = new ModuloMultigraph(n);
}

EMSCRIPTEN_KEEPALIVE
unsigned add_graph() {
    return instance->add_graph();
}

EMSCRIPTEN_KEEPALIVE
bool mark_present(unsigned graph, unsigned node_id) {
    Node* node = instance->get_node(std::make_pair(graph, node_id));
    if (node != nullptr) {
        node->mark_present();
        return true;
    }
    return false;
}

EMSCRIPTEN_KEEPALIVE
bool set_goal_node(unsigned graph, unsigned node_id) {
    Node* node = instance->get_node(std::make_pair(graph, node_id));
    if (node != nullptr) {
        node->set_goal(true);
        return true;
    }
    return false;
}

EMSCRIPTEN_KEEPALIVE
void* list_nodes(unsigned graph_id) {
    InnerGraph* graph = instance->get_graph(graph_id);
    if (graph == nullptr) {
        return nullptr;
    }
    unsigned* array = (unsigned*) malloc(sizeof(unsigned) * (1 + graph->nodes.size()));
    array[0] = 0;
    for (unsigned i = 0; i < graph->nodes.size(); i++) {
        if (graph->nodes[i].is_present()) {
            array[0]++;
            array[array[0]] = i;
        }
    }
    return array;
}

EMSCRIPTEN_KEEPALIVE
bool add_edge(unsigned graph_f, unsigned node_f, unsigned graph_t, unsigned node_t, EdgeMeta meta) {
    Node* start = instance->get_node(std::make_pair(graph_f, node_f));
    if (start != nullptr && start->is_present()) { // Add only if present! Allows for some optimization
        start->edges.push_back(std::make_pair(std::make_pair(graph_t, node_t), meta));
        return true;
    }
    return false;
}

EMSCRIPTEN_KEEPALIVE
void shuffle_all_edges(int seed) {
    std::mt19937 urng(seed);
    for (auto & graph : instance->graphs) {
        for (auto & node: graph.nodes) {
            std::shuffle(node.edges.begin(), node.edges.end(), urng);
        }
    }
}

EMSCRIPTEN_KEEPALIVE
void* bfs(unsigned graph_s, unsigned node_s, unsigned enforce_diverse_edges) {
    std::queue<FullNodeId> q;
    std::unordered_set<FullNodeId, node_id_hash> visited;
    std::unordered_map<FullNodeId, std::pair<FullNodeId, EdgeMeta>, node_id_hash> parents;
    std::vector<unsigned> svec; // serialized solutions, temporary vector
    svec.push_back(0); // position 0 holds amount of solutions 

    q.push(std::make_pair(graph_s, node_s));
    visited.insert(std::make_pair(graph_s, node_s));
    while (!q.empty()) {
        FullNodeId id = q.front(); q.pop();
        Node* node = instance->get_node(id);
        if (node->is_goal()) {
            svec[0]++;
            int size_idx = svec.size();
            svec.push_back(0);
            FullNodeId cur_id = id;
            while (parents.find(cur_id) != parents.end()) {
                auto it = parents.find(cur_id);
                svec.push_back(it->second.second);
                cur_id = it->second.first;
                svec[size_idx]++;
            }
        }
        for (auto & edge: node->edges) {
            if (enforce_diverse_edges && edge.second != 0) { 
                FullNodeId cur_id = id;
                bool ignore_edge = false;
                while (parents.find(cur_id) != parents.end()) {
                    auto it = parents.find(cur_id);
                    if (it->second.second == edge.second) {
                        ignore_edge = true;
                        break;
                    }
                    cur_id = it->second.first;
                }
                if (ignore_edge) {
                    continue;
                }
            }
            FullNodeId to = edge.first;
            if (visited.find(to) == visited.end()) {
                q.push(to);
                visited.insert(to); 
                parents[to] = std::make_pair(id, edge.second);
            }
        }
    }
    unsigned* array = (unsigned*) alloc_array(svec.size());
    memcpy(array + 1, &svec[0], svec.size() * sizeof(unsigned));
    return array;
}

EMSCRIPTEN_KEEPALIVE
void free_array(void* array) {
    free(array);
}

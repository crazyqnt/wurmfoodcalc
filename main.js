(function() {
    // 
    // DATA

    let ingredientData = {"0": {"name": "Nothing", "value": 0}, "1": {"name": "Bear", "value": 16}, "2": {"name": "Beef", "value": 17}, "3": {"name": "Canine", "value": 18}, "5": {"name": "Dragon", "value": 20}, "4": {"name": "Feline", "value": 19}, "6": {"name": "Fowl", "value": 21}, "7": {"name": "Game", "value": 22}, "8": {"name": "Horse", "value": 23}, "9": {"name": "Human", "value": 24}, "10": {"name": "Humanoid", "value": 25}, "11": {"name": "Insect", "value": 26}, "12": {"name": "Lamb", "value": 27}, "113": {"name": "Pastry", "value": 116}, "13": {"name": "Pork", "value": 28}, "14": {"name": "Seafood", "value": 29}, "15": {"name": "Snake", "value": 30}, "16": {"name": "Tough", "value": 31}, "92": {"name": "Brook Trout", "value": 19}, "86": {"name": "Carp", "value": 18}, "87": {"name": "Catfish", "value": 14}, "98": {"name": "Dorado", "value": 14}, "89": {"name": "Herring", "value": 13}, "94": {"name": "Marlin", "value": 9}, "96": {"name": "Octopus", "value": 12}, "93": {"name": "Perch", "value": 17}, "90": {"name": "Pike", "value": 11}, "91": {"name": "Roach", "value": 16}, "97": {"name": "Sailfish", "value": 13}, "85": {"name": "Smallmouth Bass", "value": 12}, "88": {"name": "Snook", "value": 15}, "99": {"name": "Tuna", "value": 15}, "95": {"name": "White Shark", "value": 11}, "67": {"name": "Cabbage", "value": 42}, "66": {"name": "Carrot", "value": 41}, "22": {"name": "Corn", "value": 44}, "83": {"name": "Cucumber", "value": 17}, "69": {"name": "Lettuce", "value": 45}, "40": {"name": "Onion", "value": 91}, "77": {"name": "Pea", "value": 58}, "70": {"name": "Pea Pod", "value": 46}, "24": {"name": "Potato", "value": 47}, "23": {"name": "Pumpkin", "value": 45}, "61": {"name": "Rice", "value": 68}, "68": {"name": "Tomato", "value": 43}, "44": {"name": "Basil", "value": 95}, "46": {"name": "Belladonna", "value": 97}, "65": {"name": "Fennel", "value": 39}, "41": {"name": "Garlic", "value": 92}, "38": {"name": "Lovage", "value": 89}, "64": {"name": "Mint", "value": 38}, "50": {"name": "Nettles", "value": 101}, "42": {"name": "Oregano", "value": 93}, "43": {"name": "Parsley", "value": 94}, "48": {"name": "Rosemary", "value": 99}, "39": {"name": "Sage", "value": 90}, "51": {"name": "Sassafras", "value": 102}, "45": {"name": "Thyme", "value": 96}, "72": {"name": "Cumin", "value": 48}, "78": {"name": "Fennel Seed", "value": 59}, "73": {"name": "Ginger", "value": 49}, "74": {"name": "Nutmeg", "value": 50}, "75": {"name": "Paprika", "value": 51}, "76": {"name": "Turmeric", "value": 52}, "63": {"name": "Chestnut", "value": 17}, "30": {"name": "Hazelnuts", "value": 8}, "80": {"name": "Pinenut", "value": 92}, "62": {"name": "Walnut", "value": 16}, "49": {"name": "Blueberry", "value": 100}, "53": {"name": "Cherries", "value": 7}, "52": {"name": "Lingonberry", "value": 103}, "81": {"name": "Raspberries", "value": 104}, "47": {"name": "Strawberries", "value": 98}, "18": {"name": "Barley", "value": 23}, "116": {"name": "Cornflour", "value": 128}, "21": {"name": "Oat", "value": 25}, "20": {"name": "Rye", "value": 23}, "19": {"name": "Wheat", "value": 25}, "28": {"name": "Buffalo Cheese", "value": 87}, "25": {"name": "Cheese", "value": 84}, "27": {"name": "Feta Cheese", "value": 86}, "26": {"name": "Goat Cheese", "value": 85}, "55": {"name": "Blue Grapes", "value": 9}, "17": {"name": "Green Apple", "value": 18}, "57": {"name": "Green Grapes", "value": 12}, "54": {"name": "Lemon", "value": 8}, "56": {"name": "Olives", "value": 10}, "84": {"name": "Orange", "value": 53}, "82": {"name": "Pineapple", "value": 5}, "104": {"name": "Bacon", "value": 79}, "32": {"name": "Black Mushroom", "value": 121}, "35": {"name": "Blue Mushroom", "value": 124}, "33": {"name": "Brown Mushroom", "value": 122}, "79": {"name": "Cocoa Bean", "value": 63}, "118": {"name": "Corn oil", "value": 5}, "117": {"name": "Cotton Seed Oil", "value": 121}, "100": {"name": "Crisps", "value": 133}, "60": {"name": "Egg", "value": 68}, "107": {"name": "Fries", "value": 111}, "109": {"name": "Gravy", "value": 106}, "31": {"name": "Green Mushroom", "value": 120}, "106": {"name": "Haggis", "value": 127}, "29": {"name": "Honey", "value": 89}, "58": {"name": "Maple Sap", "value": 18}, "112": {"name": "Maple Syrup", "value": 17}, "114": {"name": "Olive oil", "value": 20}, "102": {"name": "Passata", "value": 114}, "108": {"name": "Pesto", "value": 117}, "36": {"name": "Red Mushroom", "value": 125}, "37": {"name": "Salt", "value": 99}, "71": {"name": "Sugar", "value": 47}, "111": {"name": "Vinegar", "value": 22}, "110": {"name": "Water", "value": 6}, "34": {"name": "Yellow Mushroom", "value": 123}, "115": {"name": "Batter", "value": 82}, "105": {"name": "Bread", "value": 127}, "103": {"name": "Dough", "value": 52}, "101": {"name": "Sliced Bread", "value": 130}};

    let modifierData = {"1": {"name": "Whole", "value": 0}, "2": {"name": "Fried", "value": 1}, "3": {"name": "Roasted", "value": 4}, "4": {"name": "Diced", "value": 16}, "5": {"name": "Minced", "value": 32}, "6": {"name": "Chopped", "value": 16}, "7": {"name": "Ground", "value": 16}, "8": {"name": "Steamed", "value": 5}, "9": {"name": "Rye", "value": 3}, "10": {"name": "Oat", "value": 4}, "11": {"name": "Barley", "value": 5}, "12": {"name": "Wheat", "value": 6}, "13": {"name": "Sausage Meat", "value": 132}, "14": {"name": "Sausage Veg", "value": 76}, "15": {"name": "Jam", "value": 28}, "16": {"name": "Mashed", "value": 32}, "17": {"name": "Cooked", "value": 7}, "18": {"name": "Fresh", "value": 128}, "19": {"name": "Red wine (Vinegar)", "value": 107}};

    let rarityData = {"0": 0, "1": 1, "2": 2, "3": 3};

    let cookerData = {"0": 0, "1": 37, "2": 42, "3": 40};

    let containerData = {"0": 0, "13": 69, "10": 63, "9": 62, "2": 75, "3": 75, "5": 119, "7": 11, "8": 61, "12": 69, "4": 77, "11": 65, "1": 74, "6": 132};

    let skillData = {"109": "Aggressive Fighting", "25": "Alchemy", "130": "Animal Husbandry", "129": "Animal Taming", "120": "Archaeology", "16": "Archery", "22": "Armour Smithing", "11": "Axes", "62": "Baking", "135": "Ballistae", "63": "Beverages", "59": "Blacksmithing", "54": "Blades Smithing", "1": "Body", "3": "Body Control", "4": "Body Stamina", "5": "Body Strength", "122": "Botanizing", "103": "Bowyery", "77": "Butchering", "73": "Butchering Knife", "78": "Carpentry", "72": "Carving Knife", "128": "Catapults", "56": "Chain Armour Smithing", "118": "Channeling", "123": "Climbing", "52": "Cloth Tailoring", "14": "Clubs", "97": "Coal-Making", "19": "Cooking", "60": "Dairy Food Making", "110": "Defensive Fighting", "44": "Digging", "119": "Exorcism", "33": "Farming", "28": "Fighting", "102": "Fine Carpentry", "79": "Firemaking", "112": "First Aid", "94": "Fishing", "104": "Fletching", "121": "Foraging", "38": "Forestry", "36": "Gardening", "70": "Halberd", "91": "Hammer", "15": "Hammers", "50": "Hatchet", "29": "Healing", "61": "Hot Food Cooking", "88": "Huge Axe", "75": "Huge Club", "101": "Jewelry Smithing", "12": "Knives", "87": "Large Axe", "65": "Large Maul", "85": "Large Metal Shield", "83": "Large Wooden Shield", "51": "Leather working", "125": "Lock Picking", "95": "Locksmithing", "132": "Long Bow", "69": "Long Spear", "64": "Longsword", "53": "Masonry", "13": "Mauls", "37": "Meditating", "133": "Medium Bow", "66": "Medium Maul", "86": "Medium Metal Shield", "82": "Medium Wooden Shield", "99": "Metallurgy", "115": "Milking", "98": "Milling", "0": "Mind", "6": "Mind Logic", "7": "Mind Speed", "43": "Mining", "23": "Misc Items", "100": "Natural Substances", "26": "Nature", "111": "Normal Fighting", "34": "Papyrusmaking", "92": "Paving", "45": "Pick axe", "57": "Plate Armour Smithing", "17": "Polearms", "47": "Pottery", "117": "Praying", "116": "Preaching", "93": "Prospecting", "106": "Puppeteering", "39": "Rake", "30": "Religion", "96": "Repairing", "137": "Restoration", "48": "Ropemaking", "76": "Saw", "40": "Scythe", "114": "Shield Bashing", "58": "Shield Smithing", "24": "Shields", "134": "Ship Building", "131": "Short Bow", "89": "Shortsword", "46": "Shovel", "41": "Sickle", "42": "Small Axe", "67": "Small Maul", "84": "Small Metal Shield", "81": "Small Wooden Shield", "20": "Smithing", "2": "Soul", "8": "Soul Depth", "9": "Soul Strength", "71": "Staff", "126": "Stealing", "74": "Stone Chisel", "124": "Stone Cutting", "10": "Swords", "18": "Tailoring", "113": "Taunting", "35": "Thatching", "31": "Thievery", "107": "Toy Making", "27": "Toys", "80": "Tracking", "127": "Traps", "136": "Trebuchets", "90": "Two Handed Sword", "32": "War Machines", "68": "Warhammer", "55": "Weapon Heads Smithing", "21": "Weapon Smithing", "108": "Weaponless Fighting", "49": "Woodcutting", "105": "Yoyo"};

    let modulus = Object.keys(skillData).length; // should be 138

    //
    // GENERATOR

    class Node {
        constructor(id) {
            this.id = id;
            this._edges = [];
        }

        addEdge(to, meta) {
            this._edges.push({
                'to': to,
                'meta': meta
            });
        }

        edges() {
            return this._edges;
        }
    };

    class InnerGraph {
        constructor(id) {
            this.id = id;
            this._nodes = {};
        }

        getNode(id) {
            return this._nodes[id];
        }

        getOrCreateNode(id) {
            if (!this._nodes[id]) {
                this._nodes[id] = new Node(id);
            }
            return this._nodes[id];
        }

        getFullNodeId(node) {
            return {
                'graph': this.id,
                'node': node.id
            };
        }

        nodes() {
            return Object.values(this._nodes);
        }
    };

    class MultiGraph {
        constructor() {
            this.graphs = [];
        }

        newGraph() {
            let id = this.graphs.length;
            this.graphs.push(new InnerGraph(id));
            return this.graphs[id];
        }

        getGraph(id) {
            return this.graphs[id];
        }

        getNode(compositeId) {
            if (this.graphs[compositeId.graph]) {
                return this.graphs[compositeId.graph].getNode(compositeId.node);
            } else {
                return null;
            }
        }

        getOrCreateNode(compositeId) {
            if (this.graphs[compositeId.graph]) {
                return this.graphs[compositeId.graph].getOrCreateNode(compositeId.node);
            } else {
                return null;
            }
        }
    };

    class Queue {
        constructor() {
            this.a = [];
            this.b = [];
        }

        append(item) {
            this.b.push(item);
        }

        get() {
            if (this.a.length == 0) {
                if (this.b.length == 0) {
                    return null;
                }
                let tmp = this.a;
                this.a = this.b;
                this.b = tmp;

                this.a.reverse();
            }
            return this.a.pop();
        }

        empty() {
            return this.a.length == 0 && this.b.length == 0;
        }
    };

    function bfs(multiGraph, start) {
        let backEdges = {};
        let visited = {};
        function idxToString(idx) {
            return idx.graph + "#" + idx.node;
        }
        let solutions = [];
        let q = new Queue();
        q.append(start);
        visited[idxToString(start)] = true;
        while (!q.empty()) {
            let id = q.get();
            let node = multiGraph.getNode(id);
            if (node.goal) {
                let trace = [];
                let curidx = idxToString(id);
                while (backEdges[curidx]) {
                    trace.push(backEdges[curidx].edge.meta);
                    curidx = backEdges[curidx].parent;
                }
                solutions.push(trace);
            }
            for (let edge of node.edges()) {
                if (!visited[idxToString(edge.to)]) {
                    q.append(edge.to);
                    visited[idxToString(edge.to)] = true;
                    backEdges[idxToString(edge.to)] = {
                        'edge': edge,
                        'parent': idxToString(id)
                    };
                }
            }
        }
        return solutions;
    }

    class IngredientGenerator {
        generateAll() {
            return [];
        }
    };

    class DoughGenerater extends IngredientGenerator {
        constructor(doughTypes) {
            super();
            if (doughTypes) {
                this.doughTypes = [];
                for (let x of doughTypes) {
                    if (typeof x === "string") {
                        this.doughTypes.push(parseInt(x));
                    } else {
                        this.doughTypes.push(x);
                    }
                }
            } else {
                this.doughTypes = [];
                for (let i = 9; i <= 12; i++) {
                    this.doughTypes.push(i);
                }
            }
        }

        generateAll() {
            let ret = [];
            for (let i of this.doughTypes) {
                ret.push({
                    ingredient: 103,
                    modifier: i,
                    rarity: 0
                });
            }
            return ret;
        }
    };

    class PassataGenerator extends IngredientGenerator {
        generateAll() {
            return [{
                ingredient: 102,
                modifier: 1,
                rarity: 0
            }];
        }
    };

    class SausageGenerator extends IngredientGenerator {
        constructor(meatTypes) {
            super();
            if (meatTypes) {
                this.meatTypes = [];
                for (let x of meatTypes) {
                    if (typeof x === "string") {
                        this.meatTypes.push(parseInt(x));
                    } else {
                        this.meatTypes.push(x);
                    }
                }
            } else {
                this.meatTypes = [];
                // TODO: pastry?
                for (let i = 1; i <= 16; i++) {
                    this.meatTypes.push(i);
                }
            }
        }

        generateAll() {
            let ret = [];
            for (let type of this.meatTypes) {
                ret.push({
                    ingredient: type,
                    modifier: 13,
                    rarity: 0
                });
            }
            return ret;
        }
    };

    class CheeseGenerator extends IngredientGenerator {
        constructor(cheeseTypes) {
            super();
            if (cheeseTypes) {
                this.cheeseTypes = [];
                for (let x of cheeseTypes) {
                    if (typeof x === "string") {
                        this.cheeseTypes.push(parseInt(x));
                    } else {
                        this.cheeseTypes.push(x);
                    }
                }
            } else {
                this.cheeseTypes = [];
                for (let i = 25; i <= 28; i++) {
                    this.cheeseTypes.push(i);
                }
            }
        }

        generateAll() {
            let ret = [];
            for (let type of this.cheeseTypes) {
                ret.push({
                    ingredient: type,
                    modifier: 1,
                    rarity: 0
                });
            }
            return ret;
        }
    };

    class ChoppedHerbGenerator extends IngredientGenerator {
        generateAll() {
            let herbs = [44, 46, 65, 41, 38, 64, 50, 42, 43, 48, 39, 51, 45];
            let ret = [];
            for (let herb of herbs) {
                ret.push({
                    ingredient: herb,
                    modifier: 6,
                    rarity: 0
                });
            }
            return ret;
        }
    };

    class ChoppedVegetableGenerator extends IngredientGenerator {
        generateAll() {
            let veggies = [67, 66, 22, 83, 69, 40, 77, 70, 24, 23, 61, 68];
            let ret = [];
            for (let veggie of veggies) {
                ret.push({
                    ingredient: veggie,
                    modifier: 6,
                    rarity: 0
                });
            }
            return ret;
        }
    };

    class GroundSpiceGenerator extends IngredientGenerator {
        generateAll() {
            let ret = [];
            for (let spice = 72; spice <= 78; spice++) {
                if (spice == 77) {
                    continue;
                }
                ret.push({
                    ingredient: spice,
                    modifier: 7,
                    rarity: 0
                });
            }
            return ret;
        }
    };

    class NutsGenerator extends IngredientGenerator {
        generateAll() {
            let nuts = [63, 30, 80, 62];
            let ret = [];
            for (let nut of nuts) {
                ret.push({
                    ingredient: nut,
                    modifier: 1,
                    rarity: 0
                });
            }
            return ret;
        }
    };

    function ingredientValue(ingredient) {
        let value = 0;
        value += ingredientData[ingredient.ingredient].value;
        value += modifierData[ingredient.modifier].value;
        value += rarityData[ingredient.rarity];
        return value;
    }

    function findCombination(recipe, startValue, targetValue) {
        // Create the graph!
        let graph = new MultiGraph();

        let lastGraph = graph.newGraph();
        let startNode = lastGraph.getOrCreateNode(startValue); // create start node
        startNode.value = startValue;
        let startNodeId = lastGraph.getFullNodeId(startNode);

        for (let component of recipe) {
            component._generated = component.generator.generateAll();
        }

        function addNextNodes(lastGraph, nextGraph, ingredients, optional=false) { // lastGraph can also be equal to nextGraph
            for (let node of lastGraph.nodes()) { // For each current node ...
                let nodeVal = node.value;

                for (let ingr of ingredients) { // ... go to new node by adding each ingredient
                    let newVal = (nodeVal + ingredientValue(ingr)) % modulus;

                    let newNode = nextGraph.getOrCreateNode(newVal);
                    newNode.value = newVal;
                    node.addEdge(nextGraph.getFullNodeId(newNode), {
                        'ingredient': ingr
                    });
                }

                if (optional) { // add 'do nothing' edge
                    let newNode = nextGraph.getOrCreateNode(nodeVal);
                    newNode.value = nodeVal;
                    node.addEdge(nextGraph.getFullNodeId(newNode), {
                        'ingredient': null
                    });
                }
            }
        }

        // Handle all required components
        for (let component of recipe) {
            if (component.required === true || typeof component.min === "number") { // Required
                let times = 1; // How many times required?
                if (typeof component.min === "number") {
                    times = component.min;
                }
                for (let i = 0; i < times; i++) {
                    let nextGraph = graph.newGraph(); // For each required build new graph
                    addNextNodes(lastGraph, nextGraph, component._generated);
                    lastGraph = nextGraph;
                }
            }
        }

        function markEndNode(innerGraph) {
            for (let node of innerGraph.nodes()) {
                if (node.value == targetValue) {
                    node.goal = true;
                }
            }
        }

        markEndNode(lastGraph);

        // Handle all optional but maximum amount components
        for (let component of recipe) {
            if (typeof component.max === "number") {
                let times = component.max;
                if (typeof component.min === "number") {
                    times -= component.min;
                }

                for (let i = 0; i < times; i++) {
                    let nextGraph = graph.newGraph(); // For each optional build new graph
                    addNextNodes(lastGraph, nextGraph, component._generated, true);
                    lastGraph = nextGraph;
                    markEndNode(lastGraph);
                }
            }
        }

        // Create all nodes with all values, even if unreachable
        // This will ensure that all combinations are available
        for (let i = 0; i < modulus; i++) {
            let node = lastGraph.getOrCreateNode(i);
            node.value = i;
        }

        // Handle all infinite components
        for (let component of recipe) {
            if (!component.required && !component.min && !component.max) {
                addNextNodes(lastGraph, lastGraph, component._generated);
                markEndNode(lastGraph); // just in cased the node was only just added. can be called multiple times
            }
        }

        // Graph should be done
        let result = bfs(graph, startNodeId);
        let final = [];
        for (let trace of result) {
            let newTrace = [];
            for (let obj of trace) {
                if (obj.ingredient != null) {
                    newTrace.push(obj.ingredient);
                }
            }
            final.push(newTrace);
        }
        return final;
    }

    // 
    // CODE

    Vue.component('ingredient-selector', {
        props: ['ingredient', 'modifier', 'rarity'],
        computed: {
            ingredientLocal: {
                get: function() {
                    return this.ingredient;
                }, set: function(value) {
                    this.$emit('set', ['ingredient', this.$vnode.key, parseInt(value)]);
                }
            }, rarityLocal: {
                get: function() {
                    return this.rarity;
                }, set: function(value) {
                    this.$emit('set', ['rarity', this.$vnode.key, parseInt(value)]);
                }
            }, modifierLocal: {
                get: function() {
                    return this.modifier;
                }, set: function(value) {
                    this.$emit('set', ['modifier', this.$vnode.key, parseInt(value)]);
                }
            }
        },
        template: `
        <div class="ingredient-selector">
            <select v-model="ingredientLocal">
                <option value="0">Nothing +0</option>
                <optgroup label="Meat">
                    <option value="1">Bear +16</option>
                    <option value="2">Beef +17</option>
                    <option value="3">Canine +18</option>
                    <option value="5">Dragon +20</option>
                    <option value="4">Feline +19</option>
                    <option value="6">Fowl +21</option>
                    <option value="7">Game +22</option>
                    <option value="8">Horse +23</option>
                    <option value="9">Human +24</option>
                    <option value="10">Humanoid +25</option>
                    <option value="11">Insect +26</option>
                    <option value="12">Lamb +27</option>
                    <option value="113">Pastry +116</option>
                    <option value="13">Pork +28</option>
                    <option value="14">Seafood +29</option>
                    <option value="15">Snake +30</option>
                    <option value="16">Tough +31</option>
                </optgroup>
                <optgroup label="Fish">
                    <option value="92">Brook Trout +19</option>
                    <option value="86">Carp +18</option>
                    <option value="87">Catfish +14</option>
                    <option value="98">Dorado +14</option>
                    <option value="89">Herring +13</option>
                    <option value="94">Marlin +9</option>
                    <option value="96">Octopus +12</option>
                    <option value="93">Perch +17</option>
                    <option value="90">Pike +11</option>
                    <option value="91">Roach +16</option>
                    <option value="97">Sailfish +13</option>
                    <option value="85">Smallmouth Bass +12</option>
                    <option value="88">Snook +15</option>
                    <option value="99">Tuna +15</option>
                    <option value="95">White Shark +11</option>
                </optgroup>
                <optgroup label="Veggie">
                    <option value="67">Cabbage +42</option>
                    <option value="66">Carrot +41</option>
                    <option value="22">Corn +44</option>
                    <option value="83">Cucumber +17</option>
                    <option value="69">Lettuce +45</option>
                    <option value="40">Onion +91</option>
                    <option value="77">Pea +58</option>
                    <option value="70">Pea Pod +46</option>
                    <option value="24">Potato +47</option>
                    <option value="23">Pumpkin +45</option>
                    <option value="61">Rice +68</option>
                    <option value="68">Tomato +43</option>
                </optgroup>
                <optgroup label="Herb">
                    <option value="44">Basil +95</option>
                    <option value="46">Belladonna +97</option>
                    <option value="65">Fennel +39</option>
                    <option value="41">Garlic +92</option>
                    <option value="38">Lovage +89</option>
                    <option value="64">Mint +38</option>
                    <option value="50">Nettles +101</option>
                    <option value="42">Oregano +93</option>
                    <option value="43">Parsley +94</option>
                    <option value="48">Rosemary +99</option>
                    <option value="39">Sage +90</option>
                    <option value="51">Sassafras +102</option>
                    <option value="45">Thyme +96</option>
                </optgroup>
                <optgroup label="Spice">
                    <option value="72">Cumin +48</option>
                    <option value="78">Fennel Seed +59</option>
                    <option value="73">Ginger +49</option>
                    <option value="74">Nutmeg +50</option>
                    <option value="75">Paprika +51</option>
                    <option value="76">Turmeric +52</option>
                </optgroup>
                <optgroup label="Nut">
                    <option value="63">Chestnut +17</option>
                    <option value="30">Hazelnuts +8</option>
                    <option value="80">Pinenut +92</option>
                    <option value="62">Walnut +16</option>
                </optgroup>
                <optgroup label="Berry">
                    <option value="49">Blueberry +100</option>
                    <option value="53">Cherries +7</option>
                    <option value="52">Lingonberry +103</option>
                    <option value="81">Raspberries+104</option>
                    <option value="47">Strawberries +98</option>
                </optgroup>
                <optgroup label="Grain">
                    <option value="18">Barley +23</option>
                    <option value="116">Cornflour +128</option>
                    <option value="21">Oat +25</option>
                    <option value="20">Rye +23</option>
                    <option value="19">Wheat +25</option>
                </optgroup>
                <optgroup label="Cheese">
                    <option value="28">Buffalo Cheese +87</option>
                    <option value="25">Cheese +84</option>
                    <option value="27">Feta Cheese +86</option>
                    <option value="26">Goat Cheese +85</option>
                </optgroup>
                <optgroup label="Fruit">
                    <option value="55">Blue Grapes +9</option>
                    <option value="17">Green Apple +18</option>
                    <option value="57">Green Grapes +12</option>
                    <option value="54">Lemon +8</option>
                    <option value="56">Olives +10</option>
                    <option value="84">Orange +53</option>
                    <option value="82">Pineapple +5</option>
                </optgroup>
                <optgroup label="Other">
                    <option value="104">Bacon +79</option>
                    <option value="32">Black Mushroom +121</option>
                    <option value="35">Blue Mushroom +124</option>
                    <option value="33">Brown Mushroom +122</option>
                    <option value="79">Cocoa Bean +63</option>
                    <option value="118">Corn oil +5</option>
                    <option value="117">Cotton Seed Oil +121</option>
                    <option value="100">Crisps +133</option>
                    <option value="60">Egg +68</option>
                    <option value="107">Fries +111</option>
                    <option value="109">Gravy +106</option>
                    <option value="31">Green Mushroom +120</option>
                    <option value="106">Haggis +127</option>
                    <option value="29">Honey +89</option>
                    <option value="58">Maple Sap +18</option>
                    <option value="112">Maple Syrup +17</option>
                    <option value="114">Olive oil +20</option>
                    <option value="102">Passata +114</option>
                    <option value="108">Pesto +117</option>
                    <option value="36">Red Mushroom +125</option>
                    <option value="37">Salt +99</option>
                    <option value="71">Sugar +47</option>
                    <option value="111">Vinegar +22</option>
                    <option value="110">Water +6</option>
                    <option value="34">Yellow Mushroom +123</option>
                </optgroup>
                <optgroup label="Bread">
                    <option value="115">Batter +82</option>
                    <option value="105">Bread +127</option>
                    <option value="103">Dough +52</option>
                    <option value="101">Sliced Bread +120</option>
                </optgroup>
            </select>
            <select v-model="modifierLocal">
                <option value="1">Whole +0</option>
                <option value="2">Fried +1</option>
                <option value="3">Roasted +4</option>
                <option value="4">Diced +16</option>
                <option value="5">Minced +32</option>
                <option value="6">Chopped +16</option>
                <option value="7">Ground +16</option>
                <option value="8">Steamed +5</option>
                <option value="9">Rye +3</option>
                <option value="10">Oat +4</option>
                <option value="11">Barley +6</option>
                <option value="12">Wheat +6</option>
                <option value="13">Sausage Meat +132</option>
                <option value="14">Sausage Veg +76</option>
                <option value="15">Jam +28</option>
                <option value="16">Mashed +32</option>
                <option value="17">Cooked +7</option>
                <option value="18">Fresh +128</option>
                <option value="19">Red wine (Vinegar) +107</option>
            </select>
            <select v-model="rarityLocal">
                <option value="0">Normal +0</option>
                <option value="1">Rare +1</option>
                <option value="2">Supreme +2</option>
                <option value="3">Fantastic +3</option>
            </select>
            <button v-on:click="$emit('removeMe', $vnode.key)">Remove</button>
        </div>
        `
    });

    Vue.component('cooker-selector', {
        props: ['cooker', 'rarity', 'container'],
        computed: {
            cookerLocal: {
                get: function() {
                    return this.cooker;
                }, set: function(value) {
                    this.$emit('set', ['cooker', parseInt(value)]);
                }
            }, rarityLocal: {
                get: function() {
                    return this.rarity;
                }, set: function(value) {
                    this.$emit('set', ['cooker_rarity', parseInt(value)]);
                }
            }, containerLocal: {
                get: function() {
                    return this.container;
                }, set: function(value) {
                    this.$emit('set', ['cooker_container', parseInt(value)]);
                }
            }
        },
        template: `
            <div class="cooker-selector">
                <select v-model="cookerLocal">
                    <option value="0">Nothing +0</option>
                    <option value="1">Campfire +37</option>
                    <option value="2">Forge +42</option>
                    <option value="3">Oven +40</option>
                </select>
                <select v-model="rarityLocal">
                    <option value="0">Normal +0</option>
                    <option value="1">Rare +1</option>
                    <option value="2">Supreme +2</option>
                    <option value="3">Fantastic +3</option>
                </select>
                <select v-model="containerLocal">
                    <option value="0">Nothing +0</option>
                    <option value="13">*Plate Old System +69</option>
                    <option value="10">Baking stone +63</option>
                    <option value="9">Cake Tin +62</option>
                    <option value="2">Cauldron +75</option>
                    <option value="3">Frying Pan +75</option>
                    <option value="5">Mushroom Container +119</option>
                    <option value="7">Open Helm +11</option>
                    <option value="8">Pie Dish +61</option>
                    <option value="12">Plate +69</option>
                    <option value="4">Pottery Bowl +77</option>
                    <option value="11">Roasting Dish +65</option>
                    <option value="1">Sauce Pan +74</option>
                    <option value="6">Sausage Skin +132</option>
                </select>
            </div>
        `
    });

    Vue.component('full-selector', {
        props: ['ingredientsExternal', 'cookerExternal', 'cookerRarityExternal', 'cookerContainerExternal'],
        data: function() {
            let data = {
                ingredients: [
                    {ingredient: 0, modifier: 1, rarity: 0, key: 0},
                    {ingredient: 0, modifier: 1, rarity: 0, key: 1},
                    {ingredient: 0, modifier: 1, rarity: 0, key: 2}
                ],
                cooker: 0,
                cooker_rarity: 0,
                cooker_container: 0
            };
            if (typeof this.ingredientsExternal !== 'undefined') {
                data.ingredients = this.ingredientsExternal;
            }
            if (typeof this.cookerExternal !== 'undefined') {
                data.cooker = this.cookerExternal;
            }
            if (typeof this.cookerRarityExternal !== 'undefined') {
                data.cooker_rarity = this.cookerRarityExternal;
            }
            if (typeof this.cookerContainerExternal !== 'undefined') {
                data.cooker_container = this.cookerContainerExternal;
            }
            return data;
        },
        watch: {
            ingredientsExternal: function(newVal, oldVal) {
                this.ingredients = newVal;
            }, cookerExternal: function(newVal, oldVal) {
                this.cooker = newVal;
            }, cookerRarityExternal: function(newVal, oldVal) {
                this.cooker_rarity = newVal;
            }, cookerContainerExternal: function(newVal, oldVal) {
                this.cooker_container = newVal;
            }
        },
        methods: {
            setCooker: function(pair) {
                this[pair[0]] = pair[1];
                this.updateValue();
            }, setIngredient: function(tuple) {
                for (let i in this.ingredients) {
                    if (this.ingredients[i].key == tuple[1]) {
                        this.ingredients[i][tuple[0]] = tuple[2];
                    }
                }
                this.updateValue();
            }, removeIngredient: function(key) {
                for (let i in this.ingredients) {
                    if (this.ingredients[i].key == key) {
                        Vue.delete(this.ingredients, i);
                        break;
                    }
                }
                this.updateValue();
            }, addIngredient: function() {
                let key = 0;
                for (let i in this.ingredients) {
                    if (key <= this.ingredients[i].key) {
                        key = this.ingredients[i].key + 1;
                    }
                }
                this.ingredients.push({ingredient: 0, modifier: 1, rarity: 0, 'key': key});
                this.updateValue();
            }, updateValue: function() {
                let value = 0;
                value += cookerData[this.cooker];
                value += containerData[this.cooker_container];
                value += rarityData[this.cooker_rarity];
                for (let i in this.ingredients) {
                    let ingr = this.ingredients[i];
                    value += ingredientData[ingr.ingredient].value;
                    value += modifierData[ingr.modifier].value;
                    value += rarityData[ingr.rarity];
                }
                value %= modulus;
                this.$emit('value-update', value);
            }
        },
        template: `
            <div class="full-selector">
                Select cooking hardware: 
                <cooker-selector
                    v-bind:cooker="cooker"
                    v-bind:rarity="cooker_rarity"
                    v-bind:container="cooker_container"
                    v-on:set="setCooker($event)"
                    ></cooker-selector>
                <br />
                Select ingredients:
                <ingredient-selector v-for="item in ingredients"
                    v-bind:ingredient="item.ingredient"
                    v-bind:modifier="item.modifier"
                    v-bind:rarity="item.rarity"
                    v-bind:key="item.key"
                    v-on:set="setIngredient($event)"
                    v-on:removeMe="removeIngredient($event)"
                ></ingredient-selector>
                <button v-on:click="addIngredient()">Add ingredient</button>
            </div>
        `
    });

    Vue.component('skill-selector', {
        data: function() {
            return {
                'skill': 109
            };
        },
        computed: {
            skillLocal: {
                get: function() {
                    return this.skill;
                }, set: function(value) {
                    value = parseInt(value);
                    this.skill = value;
                    this.$emit('skill-update', value);
                }
            }
        },
        template: `
            <div class="skill-selector">
                <select v-model="skillLocal">
                    <option value="109">Aggressive Fighting</option>
                    <option value="25">Alchemy</option>
                    <option value="130">Animal Husbandry</option>
                    <option value="129">Animal Taming</option>
                    <option value="120">Archaeology</option>
                    <option value="16">Archery</option>
                    <option value="22">Armour Smithing</option>
                    <option value="11">Axes</option>
                    <option value="62">Baking</option>
                    <option value="135">Ballistae</option>
                    <option value="63">Beverages</option>
                    <option value="59">Blacksmithing</option>
                    <option value="54">Blades Smithing</option>
                    <option value="1">Body</option>
                    <option value="3">Body Control</option>
                    <option value="4">Body Stamina</option>
                    <option value="5">Body Strength</option>
                    <option value="122">Botanizing</option>
                    <option value="103">Bowyery</option>
                    <option value="77">Butchering</option>
                    <option value="73">Butchering Knife</option>
                    <option value="78">Carpentry</option>
                    <option value="72">Carving Knife</option>
                    <option value="128">Catapults</option>
                    <option value="56">Chain Armour Smithing</option>
                    <option value="118">Channeling</option>
                    <option value="123">Climbing</option>
                    <option value="52">Cloth Tailoring</option>
                    <option value="14">Clubs</option>
                    <option value="97">Coal-Making</option>
                    <option value="19">Cooking</option>
                    <option value="60">Dairy Food Making</option>
                    <option value="110">Defensive Fighting</option>
                    <option value="44">Digging</option>
                    <option value="119">Exorcism</option>
                    <option value="33">Farming</option>
                    <option value="28">Fighting</option>
                    <option value="102">Fine Carpentry</option>
                    <option value="79">Firemaking</option>
                    <option value="112">First Aid</option>
                    <option value="94">Fishing</option>
                    <option value="104">Fletching</option>
                    <option value="121">Foraging</option>
                    <option value="38">Forestry</option>
                    <option value="36">Gardening</option>
                    <option value="70">Halberd</option>
                    <option value="91">Hammer</option>
                    <option value="15">Hammers</option>
                    <option value="50">Hatchet</option>
                    <option value="29">Healing</option>
                    <option value="61">Hot Food Cooking</option>
                    <option value="88">Huge Axe</option>
                    <option value="75">Huge Club</option>
                    <option value="101">Jewelry Smithing</option>
                    <option value="12">Knives</option>
                    <option value="87">Large Axe</option>
                    <option value="65">Large Maul</option>
                    <option value="85">Large Metal Shield</option>
                    <option value="83">Large Wooden Shield</option>
                    <option value="51">Leather working</option>
                    <option value="125">Lock Picking</option>
                    <option value="95">Locksmithing</option>
                    <option value="132">Long Bow</option>
                    <option value="69">Long Spear</option>
                    <option value="64">Longsword</option>
                    <option value="53">Masonry</option>
                    <option value="13">Mauls</option>
                    <option value="37">Meditating</option>
                    <option value="133">Medium Bow</option>
                    <option value="66">Medium Maul</option>
                    <option value="86">Medium Metal Shield</option>
                    <option value="82">Medium Wooden Shield</option>
                    <option value="99">Metallurgy</option>
                    <option value="115">Milking</option>
                    <option value="98">Milling</option>
                    <option value="0">Mind</option>
                    <option value="6">Mind Logic</option>
                    <option value="7">Mind Speed</option>
                    <option value="43">Mining</option>
                    <option value="23">Misc Items</option>
                    <option value="100">Natural Substances</option>
                    <option value="26">Nature</option>
                    <option value="111">Normal Fighting</option>
                    <option value="34">Papyrusmaking</option>
                    <option value="92">Paving</option>
                    <option value="45">Pick axe</option>
                    <option value="57">Plate Armour Smithing</option>
                    <option value="17">Polearms</option>
                    <option value="47">Pottery</option>
                    <option value="117">Praying</option>
                    <option value="116">Preaching</option>
                    <option value="93">Prospecting</option>
                    <option value="106">Puppeteering</option>
                    <option value="39">Rake</option>
                    <option value="30">Religion</option>
                    <option value="96">Repairing</option>
                    <option value="137">Restoration</option>
                    <option value="48">Ropemaking</option>
                    <option value="76">Saw</option>
                    <option value="40">Scythe</option>
                    <option value="114">Shield Bashing</option>
                    <option value="58">Shield Smithing</option>
                    <option value="24">Shields</option>
                    <option value="134">Ship Building</option>
                    <option value="131">Short Bow</option>
                    <option value="89">Shortsword</option>
                    <option value="46">Shovel</option>
                    <option value="41">Sickle</option>
                    <option value="42">Small Axe</option>
                    <option value="67">Small Maul</option>
                    <option value="84">Small Metal Shield</option>
                    <option value="81">Small Wooden Shield</option>
                    <option value="20">Smithing</option>
                    <option value="2">Soul</option>
                    <option value="8">Soul Depth</option>
                    <option value="9">Soul Strength</option>
                    <option value="71">Staff</option>
                    <option value="126">Stealing</option>
                    <option value="74">Stone Chisel</option>
                    <option value="124">Stone Cutting</option>
                    <option value="10">Swords</option>
                    <option value="18">Tailoring</option>
                    <option value="113">Taunting</option>
                    <option value="35">Thatching</option>
                    <option value="31">Thievery</option>
                    <option value="107">Toy Making</option>
                    <option value="27">Toys</option>
                    <option value="80">Tracking</option>
                    <option value="127">Traps</option>
                    <option value="136">Trebuchets</option>
                    <option value="90">Two Handed Sword</option>
                    <option value="32">War Machines</option>
                    <option value="68">Warhammer</option>
                    <option value="55">Weapon Heads Smithing</option>
                    <option value="21">Weapon Smithing</option>
                    <option value="108">Weaponless Fighting</option>
                    <option value="49">Woodcutting</option>
                    <option value="105">Yoyo</option>
                </select>
            </div>
        `
    });

    Vue.component('taste-tester', {
        data: function() {
            return {
                'selectorVal': 0,
                'skillVal': 109
            }
        },
        methods: {
            valueUpdate(value) {
                this.selectorVal = value;
            }, skillUpdate(value) {
                this.skillVal = value;
            }, setOffset() {
                this.$emit("set-offset", this.offset);
            }
        },
        computed: {
            offset: {
                get: function() {
                    let offset = this.skillVal - this.selectorVal;
                    if (offset < 0) {
                        offset += modulus;
                    }
                    return offset;
                }, set: function(value) {
                    throw "Can not update calculated offset";
                }
            }
        },
        template: `
            <div class="taste-tester">
                <full-selector v-on:value-update="valueUpdate($event)"></full-selector>
                <br />
                What did it taste like?
                <skill-selector v-on:skill-update="skillUpdate($event)"></skill-selector>
                <br />
                <div class="offset-result">Your offset: {{ offset }} </div>
                <button v-on:click="setOffset()">Apply</button>
            </div>
        `
    });

    Vue.component('meal-maker', {
        props: ['offset'],
        data: function() {
            return {
                'selectorVal': 0,
                'targetSkill': 109
            };
        },
        methods: {
            valueUpdate(value) {
                this.selectorVal = value;
            }, skillUpdate(value) {
                this.targetSkill = value;
            }
        },
        computed: {
            skill: {
                get: function() {
                    let value = (this.offset + this.selectorVal) % modulus;
                    return skillData[value];
                }, set: function(value) {
                    throw "Can not update calculated skill";
                }
            }, skillClass: {
                get: function() {
                    let skill = (this.offset + this.selectorVal) % modulus;
                    if (skill == this.targetSkill) {
                        return "skill-ok skill-result";
                    } else {
                        return "skill-error skill-result";
                    }
                }, set: function(value) {
                    throw "Can not update skill class";
                }
            }, offsetOne: {
                get: function() {
                    let skill = (this.offset + this.selectorVal) % modulus;
                    let imm = this.targetSkill - skill;
                    if (imm > 0) {
                        return -skill - (modulus - this.targetSkill);
                    } else {
                        return imm;
                    }
                }, set: function(value) {
                    throw "Can not update skill class";
                }
            }, offsetTwo: {
                get: function() {
                    let skill = (this.offset + this.selectorVal) % modulus;
                    let imm = this.targetSkill - skill;
                    if (imm > 0) {
                        return imm % 138; 
                    } else {
                        return (this.targetSkill + (modulus - skill)) % 138;
                    }
                }, set: function(value) {
                    throw "Can not update skill class";
                }
            }, isDone : {
                get: function() {
                    let skill = (this.offset + this.selectorVal) % modulus;
                    return skill == this.targetSkill;
                }, set: function(value) {
                    throw "Can not update skill class";
                }
            }
        },
        template: `
            <div class="meal-maker">
                <full-selector v-on:value-update="valueUpdate($event)"></full-selector>
                <br />
                Target skill:
                <skill-selector v-on:skill-update="skillUpdate($event)"></skill-selector>
                <div v-bind:class="skillClass">
                    You will get: <b> {{ skill }} </b> <br />
                    <div v-if="!isDone">
                        Change values by {{ offsetOne }} or {{ offsetTwo }}
                    </div>
                </div>
            </div>
        `
    });

    Vue.component('pizza-generator', {
        props: ['offset'],
        data: function() {
            let meatTypes = {};
            for (let i = 1; i <= 16; i++) {
                meatTypes[i] = ingredientData[i].name;
            }
            let cheeseTypes = {};
            for (let i = 25; i <= 28; i++) {
                cheeseTypes[i] = ingredientData[i].name;
            }
            let doughTypes = {};
            for (let i = 9; i <= 12; i++) {
                doughTypes[i] = modifierData[i].name;
            }
            return {
                'meatTypes': meatTypes,
                'selectedMeatTypes': ['1', '2', '3', '4', '7', '8', '10', '11', '12', '13', '14', '15'],
                'doughTypes': doughTypes,
                'selectedDoughTypes': ['9', '10', '11', '12'],
                'cheeseTypes': cheeseTypes,
                'selectedCheeseTypes': ['25', '26', '27', '28'],
                'forceCheese': false,
                'minSaussages': 2,
                'maxSaussages': 4,
                'choppedHerbs': true,
                'choppedVeggies': true,
                'groundSpice': true,
                'nuts': false,
                'targetSkill': 109,
                'resultStatus': 0,
                'result': {
                    'ingredients': [],
                    'cooker': 0,
                    'cookerRarity': 0,
                    'cookerContainer': 0
                }
            };
        },
        methods: {
            calculate() {
                let ingrs = [{
                    'generator': new DoughGenerater(Array.from(this.selectedDoughTypes)),
                    required: true
                }, {
                    'generator': new PassataGenerator(),
                    required: true
                }, {
                    'generator': new SausageGenerator(Array.from(this.selectedMeatTypes)),
                    min: this.minSaussages,
                    max: this.maxSaussages
                }];
                let cheeseGenerator = new CheeseGenerator(Array.from(this.selectedCheeseTypes));
                if (this.forceCheese) {
                    ingrs.push({
                        'generator': cheeseGenerator,
                        min: 1
                    });
                } else {
                    ingrs.push({
                        'generator': cheeseGenerator
                    });
                }
                if (this.choppedHerbs) {
                    ingrs.push({
                        'generator': new ChoppedHerbGenerator()
                    });
                }
                if (this.choppedVeggies) {
                    ingrs.push({
                        'generator': new ChoppedVegetableGenerator()
                    });
                }
                if (this.groundSpice) {
                    ingrs.push({
                        'generator': new GroundSpiceGenerator()
                    });
                }
                if (this.nuts) {
                    ingrs.push({
                        'generator': new NutsGenerator()
                    });
                }

                let result = findCombination(ingrs, (this.offset + 40 /* Oven */ + 63 /* Baking stone */) % modulus, this.targetSkill);
                if (result.length > 0) {
                    this.result.ingredients = result[0];
                    this.result.cooker = 3;
                    this.result.cookerRarity = 0; // TODO: make adjustable
                    this.result.cookerContainer = 10;
                    this.resultStatus = 1;
                } else {
                    this.resultStatus = 2;
                }
            }, skillUpdate(value) {
                this.targetSkill = value;
            }
        },
        computed: {
            bearMeat: {get: function() {return this.meatTypes[1];}, set: function(value) {this.meatTypes[1] = value;}},
            beefMeat: {get: function() {return this.meatTypes[2];}, set: function(value) {this.meatTypes[2] = value;}},
            canineMeat: {get: function() {return this.meatTypes[3];}, set: function(value) {this.meatTypes[3] = value;}},
            felineMeat: {get: function() {return this.meatTypes[4];}, set: function(value) {this.meatTypes[4] = value;}},
            fowlMeat: {get: function() {return this.meatTypes[5];}, set: function(value) {this.meatTypes[5] = value;}},
            gameMeat: {get: function() {return this.meatTypes[6];}, set: function(value) {this.meatTypes[6] = value;}},
            horseMeat: {get: function() {return this.meatTypes[7];}, set: function(value) {this.meatTypes[7] = value;}}
        },
        template: `
            <div class="generator">
                Desired Affinity: <skill-selector v-on:skill-update="skillUpdate($event)"></skill-selector> <br />
                <div class="ingredient-category">
                    Minimum saussages: <input type="number" min="0" v-model.number="minSaussages"/>. Maximum saussages: <input type="number" min="0" v-model.number="maxSaussages"/> <br />
                    Select desired meat types for saussages: <br />
                    <div v-for="(value, name) in meatTypes" class="meat-select">
                        <input type="checkbox" v-model="selectedMeatTypes" :value="name" :id="'pizzaMeat_'+name" /><label :for="'pizzaMeat_'+name">{{ value }}</label>
                    </div>
                </div>
                <div class="ingredient-category">
                    Dough types: <br />
                    <div v-for="(value, name) in doughTypes" class="meat-select">
                        <input type="checkbox" v-model="selectedDoughTypes" :value="name" :id="'pizzaDough_'+name" /><label :for="'pizzaDough_'+name">{{ value }}</label>
                    </div>
                </div>
                <div class="ingredient-category">
                    Cheese types: <br />
                    <div v-for="(value, name) in cheeseTypes" class="meat-select">
                        <input type="checkbox" v-model="selectedCheeseTypes" :value="name" :id="'pizzaCheese_'+name" /><label :for="'pizzaCheese_'+name">{{ value }}</label>
                    </div> <br />
                    <input type="checkbox" v-model="forceCheese" id="pizza_needCheese" /><label for="pizza_needCheese">I want cheese! (Guarantees that cheese will be on the pizza)</label>
                </div>
                <div class="ingredient-category">
                    Other ingredients: <br />
                    <input type="checkbox" v-model="choppedHerbs" id="pizza_choppedHerbs" /><label for="pizza_choppedHerbs">Chopped Herbs</label> <br />
                    <input type="checkbox" v-model="choppedVeggies" id="pizza_choppedVeggies" /><label for="pizza_choppedVeggies">Chopped Vegetables</label> <br />
                    <input type="checkbox" v-model="groundSpice" id="pizza_groundSpice" /><label for="pizza_groundSpice">Ground Spice</label> <br />
                    <input type="checkbox" v-model="nuts" id="pizza_nuts" /><label for="pizza_nuts">Nuts</label>
                </div>
                <br />
                <button v-on:click="calculate()">Make a pizza 🍕</button>

                <full-selector v-if="resultStatus == 1" v-bind:ingredientsExternal="result.ingredients" v-bind:cookerExternal="result.cooker"
                    v-bind:cookerRarityExternal="result.cookerRarity" v-bind:cookerContainerExternal="result.cookerContainer"
                ></full-selector>
                <div class="skill-error" v-if="resultStatus == 2">
                    Could not find a recipe
                </div>
            </div>
        `
    });

    let app = new Vue({
        el: '#app',
        data: {
            offset: 0,
            offsetFinder: false,
            mealMaker: false,
            pizzaGenerator: false
        },
        methods: {
            setOffset(offset) {
                this.offset = offset;
            }
        }
    });
    window.appDebug = app;
})();
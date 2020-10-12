all: multigraph.wasm

multigraph.wasm: multigraph.cpp
	emcc -O3 multigraph.cpp -o multigraph.wasm --no-entry -Wall -Wextra

.PHONY: clean
clean:
	rm -f multigraph.wasm

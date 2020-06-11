let tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]];
console.log(singleSortFunction(tickets));

function singleSortFunction(arr){
    const nodes = new Set();
    const edges = {};

    arr.forEach(edge => {
        if (edges[edge[0]] === undefined) {
            nodes.add(edge[0]);
            edges[edge[0]] = [];
        }
        if (edges[edge[1]] === undefined) {
            nodes.add(edge[1]);
            edges[edge[1]] = [];
        }
        edges[edge[0]].push({node: edge[1]});
    });

    const stack = [];
    const visited = new Set();

    nodes.forEach((node,i) => {
        if (!visited.has(node)) {
            helper(edges,node, visited, stack);
        }
    });

    return stack.reverse().join(', ');
}

function helper(edges, node, visited, stack){
    visited.add(node);
    edges[node].forEach(n => {
        if (!visited.has(n.node)) {
            helper(edges, n.node, visited, stack);
        }
    });
    stack.push(node);
}

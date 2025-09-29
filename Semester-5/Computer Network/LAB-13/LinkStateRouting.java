import java.util.Arrays;

public class LinkStateRouting {

    static final int V = 6;
    static final int INF = Integer.MAX_VALUE;

    int minDistance(int dist[], boolean visited[]) {
        int min = INF, min_index = -1;

        for (int v = 0; v < V; v++) {
            if (!visited[v] && dist[v] <= min) {
                min = dist[v];
                min_index = v;
            }
        }

        return min_index;
    }

    void printSolution(int dist[]) {
        System.out.println("Vertex \t Distance from Source");
        for (int i = 0; i < V; i++) {
            System.out.println(i + " \t\t " + dist[i]);
        }
    }

    void dijkstra(int graph[][], int src) {
        int dist[] = new int[V];
        boolean visited[] = new boolean[V];

        Arrays.fill(dist, INF);
        Arrays.fill(visited, false);
        dist[src] = 0;
        for (int count = 0; count < V - 1; count++) {
            int u = minDistance(dist, visited);
            visited[u] = true;

            for (int v = 0; v < V; v++) {
                if (!visited[v] && graph[u][v] != 0 && dist[u] != INF && dist[u] +
                        graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }
        printSolution(dist);
    }

    public static void main(String[] args) {
        int graph[][] = {
                { 0, 2, INF, 1, INF, INF },
                { 2, 0, 3, 2, INF, INF },
                { INF, 3, 0, INF, 7, 4 },
                { 1, 2, INF, 0, 5, INF },
                { INF, INF, 7, 5, 0, 6 },
                { INF, INF, 4, INF, 6, 0 }
        };
        LinkStateRouting lsr = new LinkStateRouting();
        lsr.dijkstra(graph, 0);
    }
}
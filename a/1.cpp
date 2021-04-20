#include <iostream>
#include <vector>
#define MAX_INT 1e7

using namespace std;
int g[100][100];
int n, m;
int u[100]; // = 0 -- if u[i] не в 1 мн., = 1 -- u[i] в 1мн. 
int c[100];
vector<int> d(100, MAX_INT);

int main() {
    int x, y, l;
    cin >> n >> m;
    for (int i = 0; i < m; i++) {
        cin >> x >> y >> l;
        x--; y--;
        g[x][y] = l;
        g[y][x] = l;
    }

    d[0] = 0; // до 0-ой вершины расстояние равен 0

    for (int i = 0; i < n; i++) {
        int v = -1;
        for (int j = 0; j < n; j++)
            if (!u[j] && (v == -1 || d[v] > d[j])) // (если еще она не должна быть использована) AND (либо мы ее еще не нашли либо расстояние больше чем джей)
                v = j;

        cout << v + 1 << endl;
        
        u[v] = true; // добавляем в 1 сет

        for (int j = 0; j < n; j++)
            if (!u[j] && g[v][j] > 0) {
                if (d[j] > g[v][j]) {
                    d[j] = g[v][j];
                    c[j] = v;
                }
            }
    }
    for (int i = 0; i < n; i++)
        cout << c[i] + 1 << " ";
    return 0;
}
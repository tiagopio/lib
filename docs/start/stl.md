# C++ Standard Template Library (STL)

## Aula Relacionada recomendada:

<iframe width="560" height="315" src="https://www.youtube.com/embed/beHruxE8D0M?si=gQICcS7_hceNuraj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Conhecendo a STL:
A **Standard Template Library** (STL) do C++ é um conjunto de classes e funções baseadas em templates que implementam estruturas de dados e algoritmos amplamente utilizados, como listas, pilhas, vetores, ordenação, busca, entre outros. Além disso, ela disponibiliza iteradores e functors, o que simplifica o uso e a integração de algoritmos com os containers.

Nesta seção, vamos conhecer as principais estruturas e algoritmos da STL que são usados na programação competitiva.

As estruturas de dados mais comuns são:

| Estrutura   | Descrição                            |
| ----------- | ------------------------------------ |
| `vector`    |      Armazena elementos como um array, mas pode alterar seu tamanho dinamicamente. A adição e remoção de elementos geralmente ocorrem no final, e os elementos podem ser acessados por índice.  |
| `set`       |      Armazena elementos únicos de forma ordenada (crescente). Elementos não podem ser acessados por índice. |
| `map`       |  Armazena elementos em pares "chave/valor". Pode ser acessado através das chaves, e não pelo índice. |
| `pair`     |      Armazena dois valores como um único elemento, onde cada valor pode ter um tipo diferente. O acesso aos valores é feito por meio de `first` e `second`. |
| `stack`     |      Armazena elementos em uma ordem específica, chamada LIFO (Last In, First Out), onde os elementos podem ser adicionados e removidos apenas do topo. Não é acessível por índice. |
| `list`      |      Armazena elementos de forma sequencial, onde cada elemento está ligado ao próximo. A adição e remoção de elementos podem ser realizadas em ambas as extremidades, mas não é acessível por índice. |
| `queue`     |      Armazena elementos em uma ordem específica, chamada FIFO (First In, First Out), onde os elementos são adicionados no final e removidos da frente. Não é acessível por índice. |
| `deque`     |      Armazena elementos em uma fila de duas extremidades (deque), onde os elementos podem ser adicionados e removidos de ambos os lados. Os elementos podem ser acessados por índice. |


Os algortimos mais comuns são:

| Algoritmo      | Descrição                          |
| ----------- | ------------------------------------ |
| `sort`       | Ordena os elementos em uma estrutura de dados.  |
| `reverse`       | Inverte a ordem dos elementos em um determinado intervalo. |
| `swap`    | Troca os valores de duas variáveis. |

## Template básico para a prática desta seção:

Para facilitar nossa pratíca nessa seção utilizaremos esse template simples
para praticar as estruturas:

```cpp title="template.cpp"
#include <bits/stdc++.h>
using namespace std;

int main() {

  return 0;
}
```

### `#!cpp #include <bits/stdc++.h>`
É um arquivo de cabeçalho que já inclui todas as bibliotecas padrão, ou seja, você não precisa dar `#!cpp #include` manualmente para cada estrutura de dados ou algoritmo que for usar. Por exemplo, se precisar de `vector` e `set`, normalmente teria que incluir `#!cpp #include <vector>` e `#!cpp #include <set>` separadamente. Com `#!cpp #include <bits/stdc++.h>`, tudo isso já vem junto, facilitando o uso e economizando tempo.

### `#!cpp using namespace std;`
O `#!cpp using namespace std;` é uma diretiva no C++ que permite que você use os elementos da biblioteca padrão (std) sem precisar escrever `#!cpp std::` antes de cada um deles. Isso facilita a escrita do código, pois você não precisa digitar `#!cpp std::` repetidamente para acessar coisas como `#!cpp cout`, `#!cpp cin`, `#!cpp vector`, entre outros.

Por exemplo, se você não usar o `#!cpp using namespace std;`, seria necessário escrever `#!cpp std::cout`, `#!cpp std::cin`, `#!cpp std::vector`, etc. Com o `#!cpp using namespace std;`, basta escrever `#!cpp cout`, `#!cpp cin`, `#!cpp vector`, e o compilador entenderá automaticamente que você está se referindo à versão padrão dessas funções e estruturas.

## Estruturas de Dados:
Em cada um dos links abaixo, você encontra referências que ensinam a utilizar cada uma das estruturas.

- ``vector``: <https://www.geeksforgeeks.org/vector-in-cpp-stl/>
- ``set``: <https://www.geeksforgeeks.org/set-in-cpp-stl/>
- ``map``: <https://www.geeksforgeeks.org/set-in-cpp-stl/>
- ``pair``: <https://www.geeksforgeeks.org/pair-in-cpp-stl/>
- ``stack``: <https://www.geeksforgeeks.org/stack-in-cpp-stl/>
- ``list``: <https://www.geeksforgeeks.org/list-cpp-stl/>
- ``queue``: <https://www.geeksforgeeks.org/queue-cpp-stl/>
- ``deque``:  <https://www.geeksforgeeks.org/deque-cpp-stl/>

## Algoritmos:
Em cada um dos links abaixo, você encontra referências que ensinam a utilizar cada um dos algoritmos.

- ``sort``: <https://www.geeksforgeeks.org/sort-c-stl/>
- ``reverse``: <https://www.geeksforgeeks.org/stdreverse-in-c/>
- ``swap``: <https://www.geeksforgeeks.org/swap-in-cpp/>

## Lista de Exercícios:

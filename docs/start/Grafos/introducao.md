# Introdução

Essa seção tem o intuito de apresentar uma introdução à Teoria dos Grafos.

## Definição
Um grafo é uma estrutura representada por um par ordenado G = (V, E), em que V é o conjunto de vértices e E é o c:onjunto de arestas.

!!!note "Exemplo"
    ``` mermaid
    graph LR
    A --- B
    B --- C
    C --- D
    D --- C
    B --- D
    ```
    O grafo é formado pelo conjunto de vértices V = {A, B, C, D} e pelo conjunto de arestas E = {(A,B), (B,C), (C,D), (D,C), (B,D)}.



## Grafos Direcionados
Um grafo direcionado ou orientado é um grafo em que suas arestas possuem um sentido. Se um par (U,V) pertence ao conjunto E de arestas, então existe um caminho de U para V, mas não necessariamente existe um caminho de V para U.

!!!tip "Representação das arestas"
    No grafo direcionado, as arestas geralmente são representadas por setas. 

!!!note "Exemplo"
    ``` mermaid
    graph LR
    A --> B
    B --> C
    C --> D
    D --> C
    B --> D
    ```
    No grafo acima, o conjunto de arestas é E = {(A,B), (B,C), (C,D), (D,C), (B,D)}.
    <br>
    A aresta (B,D) existe, porém não há um caminho que saia do vértice D e chegue ao vértice B.

## Grafo Ponderado
Um grafo ponderado é um grafo que cada aresta possui um peso, ou seja, um valor. Os pesos podem representar problemas, como custo ou distância entre os vértices.

!!!note "Exemplo"
    ``` mermaid
    graph LR

    A --- |1| B
    B --- |2| C
    C --- |3| D
    D --- |4| C
    B --- |2| D

    linkStyle default font-size:16px, background:transparent;
    ```
    Podemos pensar nos pesos de cada aresta como sendo a distância daquela rota entre os vértices. Por exemplo, entre os vértices C e D existe uma rota de tamanho 3 e outra rota de tamanho 4.

## Árvore
Uma árvore é um tipo de grafo geralmente utilizado para representar uma hierarquia entre os vértices. O vértice mais acima é chamado de Raiz, e a altura de cada vértice representa a sua distância até a raiz. Um vértice que não tem filhos é chamado de Folha.
<br>


!!!note
    ``` mermaid
    graph 
    A --- B
    B --- C
    B --- D
    A --- E
    E --- F
    ```
    Árvore cuja raiz é o vertice A, e as folhas são os vértices C, D e F.

    !!!info
        <pre>
        As principais características de uma árvore são: 
        - Um vértice pode ter vários filhos, porém tem um único pai. 
        - Possui exatamente N-1 arestas, sendo N o número de vértices. 
        - Existe apenas um caminho entre dois vértices. 
        - Não apresenta ciclos
        </pre>


!!!failure "Cuidado"
    ``` mermaid
    graph 
    A --- B
    B --- C
    B --- D
    A --- E
    E --- F
    B --- F
    ```
    <pre>
    O grafo acima não é uma arvore por alguns motivos:
    - O número de vertices é 6, porém temos 6 arestas em vez de 5. 
    - O vértice F apresenta dois pais: os vértices B e E.
    - Existe mais de um caminho entre os vértices B e F:
        Caminho 1) B->F
        Caminho 2) B->A->E->F
    - O grafo apresenta um ciclo: B -> A -> E -> F -> B 
    </pre>

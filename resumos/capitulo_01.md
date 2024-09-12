# Resumo capítulo 1 - Introdução a algoritmos

## Pesquisa binária

A **pesquisa binária** é um algoritmo eficiente usado para encontrar um elemento em uma lista **ordenada**. O algoritmo reduz a área de busca pela metade a cada iteração, o que o torna muito mais rápido do que a busca linear.

- A **entrada** para a pesquisa binária deve ser uma lista **ordenada** de elementos.
- Se o item procurado estiver na lista, o algoritmo retorna a sua **posição**; caso contrário, retorna `none`.
- A cada iteração, a pesquisa binária **elimina metade** das opções restantes até que sobre apenas uma.

### Eficiência
A pesquisa binária precisa de **log₂n** etapas no pior cenário para encontrar o item em uma lista de tamanho `n`. Isso significa que, para listas grandes, o número de comparações é muito menor do que em uma pesquisa linear, que requer até `n` comparações. 

Por exemplo:
- Para uma lista de 8 elementos, a pesquisa binária precisa de, no máximo, **3 comparações** (`log₂8 = 3`), enquanto a pesquisa linear precisaria de até 8.
- Para uma lista de 1024 elementos, a pesquisa binária requer no máximo **10 comparações** (`log₂1024 = 10`), enquanto a pesquisa linear precisaria de 1024.

### Exercícios
1. Em uma lista de 128 elementos, o número máximo de comparações necessárias para encontrar um item usando pesquisa binária seria **7** (`log₂128 = 7`).
2. Se o tamanho da lista fosse duplicado para 256, o número máximo de comparações seria **8** (`log₂256 = 8`).

### Complemento
A pesquisa binária é especialmente útil quando estamos lidando com listas grandes e ordenadas, pois sua eficiência cresce exponencialmente com o tamanho da lista. No entanto, o algoritmo só funciona corretamente em listas que já estão ordenadas. Caso a lista não esteja organizada, é necessário ordená-la antes de realizar a busca, o que pode adicionar um custo extra dependendo do método de ordenação utilizado.

## Tempo de Execução

O **tempo de execução** de um algoritmo mede o número de operações necessárias para resolver um problema em função do tamanho da entrada. Para algoritmos de busca, o tempo de execução pode variar dependendo da abordagem:

- A **pesquisa simples** (ou busca linear) examina cada elemento da lista um por um. No pior caso, ela precisa realizar um número de tentativas igual ao tamanho da lista, ou seja, se a lista tiver `n` elementos, a busca linear precisa de **n tentativas**. O tempo de execução nesse caso é **linear**, descrito como **O(n)**.

- A **pesquisa binária**, por outro lado, é muito mais eficiente, pois corta a lista pela metade a cada tentativa. O número máximo de comparações é dado por **log₂n**, onde `n` é o tamanho da lista. O tempo de execução da pesquisa binária é **logarítmico**, representado como **O(log n)**.

### Complemento

- O tempo de execução linear, **O(n)**, significa que o tempo necessário cresce proporcionalmente ao tamanho da lista. Se duplicarmos o tamanho da lista, o número de comparações também dobra. Por isso, para listas grandes, a pesquisa linear pode ser muito ineficiente.
  
- Já o tempo de execução logarítmico, **O(log n)**, significa que o número de operações cresce de forma muito mais lenta à medida que a lista aumenta. Na pesquisa binária, mesmo para listas enormes, o número de tentativas cresce de maneira muito mais controlada. Por exemplo, em uma lista de 1.000.000 de elementos, a pesquisa binária precisaria de apenas cerca de 20 comparações no pior caso, enquanto a pesquisa linear precisaria de até 1.000.000.

A pesquisa binária é muito eficiente para listas grandes, mas **depende** de uma pré-condição importante: a **lista deve estar ordenada**. Se a lista não estiver em ordem, a pesquisa binária não funcionará corretamente, e será necessário ordenar a lista primeiro, o que pode adicionar complexidade adicional ao processo. 

Esse conceito de **complexidade de tempo** é crucial para entender a eficiência de algoritmos, especialmente quando trabalhamos com grandes volumes de dados.

## Notação Big O

A **notação Big O** descreve a eficiência de um algoritmo em termos de como seu tempo de execução cresce à medida que o tamanho da entrada aumenta. Ela permite **comparar a velocidade de diferentes algoritmos**, medindo o número de operações em vez de segundos reais, e é usada para definir o comportamento de um algoritmo no **pior caso**.

### Classificações de Tempo de Execução (Big O)
- **O(log n)** - Tempo **logarítmico**: Exemplo, **pesquisa binária**. Muito eficiente, pois reduz a área de busca pela metade a cada operação.
- **O(n)** - Tempo **linear**: Exemplo, **pesquisa simples**. O algoritmo percorre todos os elementos, fazendo `n` comparações.
- **O(n * log n)**: Exemplo, algoritmos de ordenação rápidos, como o **quicksort**. Mais eficiente do que algoritmos quadráticos.
- **O(n²)** - Tempo **quadrático**: Exemplo, **ordenação por seleção**. O tempo de execução aumenta rapidamente com o tamanho da entrada.
- **O(n!)** - Tempo **fatorial**: Exemplo, o problema do **caixeiro-viajante**. Extremamente ineficiente para entradas grandes.

### Comparação e Eficiência
A notação Big O permite entender o quão rapidamente o número de operações cresce com o aumento do tamanho da entrada. Por exemplo:
- **O(log n)** é mais eficiente que **O(n)**, pois a pesquisa logarítmica realiza muito menos operações à medida que o tamanho da lista aumenta.
- Algoritmos com tempo de execução **O(n²)** ou **O(n!)** crescem exponencialmente mais rápido e se tornam impraticáveis para listas grandes.

### Importância
A **rapidez de um algoritmo** não é medida em segundos, mas sim no número de operações à medida que o tamanho da entrada aumenta. A notação Big O expressa esse crescimento e é essencial para determinar qual algoritmo é mais apropriado para grandes volumes de dados.

### Exercícios
1. Para encontrar um nome em uma agenda telefônica: **O(log n)** (tempo logarítmico).
2. Para procurar o dono de um número, percorrendo a agenda inteira: **O(n)** (tempo linear).
3. Para ler todos os números da agenda: **O(n)** (tempo linear).
4. Para ler apenas números de nomes começando com 'A': **O(n)** (tempo linear), pois ainda é necessário verificar cada entrada.

### Complemento
Com a notação Big O, entendemos que algoritmos como a **pesquisa binária (O(log n))** escalam muito bem com grandes volumes de dados, enquanto algoritmos quadráticos ou fatoriais se tornam ineficazes rapidamente. Essa análise é crucial no desenvolvimento de sistemas eficientes, especialmente ao lidar com grandes bases de dados ou problemas computacionalmente complexos.

## Problema do Caixeiro-Viajante

O problema do **caixeiro-viajante** é um exemplo clássico de um problema de otimização que envolve encontrar a rota mais curta para visitar um conjunto de cidades. O viajante deve visitar cada cidade exatamente uma vez e retornar à cidade de origem, e o objetivo é encontrar a **menor distância** possível.

### Crescimento Fatorial (O(n!))
O tempo de execução do problema do caixeiro-viajante cresce de maneira **fatorial**, ou seja, o número de operações necessárias aumenta rapidamente à medida que o número de cidades aumenta. Para `n` cidades, o número de ordens possíveis de visita é dado por **n!** (fatorial de `n`).

- Para **5 cidades**, o número de operações é **5! = 120**.
- Para **6 cidades**, o número de operações é **6! = 720**.
- Para **7 cidades**, o número de operações é **7! = 5.040**.

### Importância da Notação Fatorial
A notação **O(n!)** representa um tempo de execução extremamente ineficiente. Conforme o número de cidades cresce, o tempo necessário para encontrar a solução aumenta exponencialmente, tornando o problema inviável para um grande número de cidades. Para problemas com uma entrada relativamente pequena, como 5 ou 6 cidades, o cálculo ainda pode ser feito, mas para entradas maiores, o crescimento fatorial torna a resolução direta do problema impraticável.

### Complemento
Devido à sua complexidade, o problema do caixeiro-viajante é um exemplo típico de problemas de otimização difíceis (NP-difíceis). Em vez de resolver o problema de forma exata para um grande número de cidades, é comum utilizar **algoritmos heurísticos** e **aproximações**, que conseguem encontrar boas soluções em menos tempo, mesmo que não sejam sempre a solução ótima.
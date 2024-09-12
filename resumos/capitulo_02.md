# Resumo capítulo 2 - Ordenação por seleção

## Arrays e Listas Encadeadas - Resumo Explicativo

### Arrays
- **Definição**: Arrays armazenam valores contiguamente, ou seja, um do lado do outro na memória.
- **Inserções**: Como os elementos precisam estar em posições contíguas, a inserção de novos elementos pode ser lenta, pois o array precisa ser realocado para um novo espaço quando não há mais espaço disponível. Uma solução para isso é alocar mais espaço do que o necessário inicialmente, mas isso pode desperdiçar memória.
- **Leitura**: Arrays são muito eficientes em leituras aleatórias, pois como os itens estão todos contíguos, sabemos a posição exata de cada elemento e podemos acessá-lo instantaneamente.
  
### Listas Encadeadas
- **Definição**: Em listas encadeadas, os itens são armazenados em locais aleatórios da memória, onde cada item contém o endereço do próximo.
- **Inserções**: Inserir novos elementos é fácil e rápido, pois não requer que os itens sejam realocados. O novo item é simplesmente adicionado e o endereço do item anterior é atualizado.
- **Leitura**: A leitura em listas encadeadas é sequencial. Isso significa que, para acessar um item no meio ou no final da lista, precisamos percorrer os elementos anteriores um a um, o que pode tornar a leitura mais lenta em comparação com arrays.

### Comparação de Tempo de Execução (Arrays vs Listas Encadeadas)
|            | Leitura Aleatória | Inserção | Remoção |
|------------|-------------------|----------|---------|
| **Arrays** | O(1)              | O(n)     | O(n)    |
| **Listas** | O(n)              | O(1)     | O(1)    |

- **Leitura**: Arrays têm leitura constante (O(1)) para acesso aleatório, enquanto listas encadeadas têm leitura linear (O(n)).
- **Inserção/Remoção**: Listas encadeadas são mais rápidas em inserções e remoções (O(1)) porque não precisam mover outros elementos. Em arrays, inserções e remoções podem ser lentas (O(n)) porque podem envolver realocar ou reorganizar itens.

### Tipos de Acesso
- **Acesso Aleatório**: Arrays permitem acesso aleatório eficiente, onde você pode acessar qualquer elemento instantaneamente, como se pular diretamente para a posição desejada.
- **Acesso Sequencial**: Listas encadeadas são melhores para acesso sequencial, onde você percorre os itens um por um, mas não são eficientes para saltar diretamente para um item específico.

### Exemplos Práticos
1. **Aplicativo Financeiro (Muitas Inserções, Poucas Leituras)**: Nesse caso, uma **lista encadeada** é a melhor escolha, pois a inserção é rápida e não há muitas leituras aleatórias.
2. **Fila de Pedidos em Restaurante**: Como a inserção e remoção são sequenciais (no final e no começo), uma **lista encadeada** também seria mais adequada.
3. **Busca em Lista de Usuários (Facebook)**: A pesquisa binária requer acesso aleatório, então um **array** é a melhor opção, pois permite acessar qualquer item instantaneamente.
4. **Inserção Frequente no Facebook**: Arrays têm a desvantagem de serem lentos em inserções frequentes, pois precisam ser realocados na memória.

### Estrutura Híbrida: Array de Listas Encadeadas
Essa estrutura combina as vantagens dos arrays e listas encadeadas:
- **Inserções**: Mais rápidas do que arrays, pois cada lista encadeada dentro do array permite adições fáceis.
- **Buscas**: Mais lentas do que arrays, pois cada lista dentro do array ainda precisa ser percorrida sequencialmente.

## Ordenação por Seleção

A **ordenação por seleção** é um algoritmo simples que organiza uma lista de itens, repetidamente selecionando o menor (ou maior) elemento da lista não ordenada e movendo-o para a posição correta em uma nova lista ou diretamente na própria lista.

### Como Funciona:
1. **Passo Inicial**: Começamos com uma lista de itens desordenados.
2. **Seleção do Menor Item**: Para cada posição da lista, buscamos o menor item (ou maior, dependendo da ordenação desejada) nos elementos restantes e o movemos para o início (ou final) da lista ordenada.
3. **Repetição**: Repetimos esse processo até que todos os itens estejam na ordem correta.

### Exemplo:
Imaginemos uma lista de artistas com contagens de plays. Queremos ordenar essa lista dos artistas mais escutados para os menos escutados:
- Primeiro, encontramos o artista mais escutado, o removemos da lista original e o movemos para o início de uma nova lista.
- Repetimos o processo para o segundo artista mais escutado, e assim por diante, até que todos os artistas estejam ordenados.

### Tempo de Execução:
O tempo de execução da ordenação por seleção é **O(n²)**, porque:
- Para cada elemento, precisamos encontrar o menor (ou maior), o que requer **O(n)** operações.
- Esse processo é repetido para os **n** elementos da lista.

Portanto, o tempo total será **O(n) x O(n) = O(n²)**.

### Desvantagens:
- A ordenação por seleção é um algoritmo fácil de entender e implementar, mas não é eficiente para listas grandes. Isso ocorre porque ele requer comparar cada item com todos os outros, o que pode se tornar lento à medida que o número de itens aumenta.

### Conclusão:
Embora seja simples, o algoritmo de **ordenação por seleção** não é o mais rápido, especialmente para grandes listas, devido ao seu tempo de execução quadrático.
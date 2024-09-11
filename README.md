# Entendendo algoritmos

## Anotações sobre a leitura do livro Entendendo algoritimos - um guia ilustrado para programadores e outros curiosos

[Exercícios de código resolvidos](https://github.com/egonschiele/grokking_algorithms)

## Capítulo 1 - Introdução a algoritmos
- O que é um algoritmo?
    - **Um algoritmo é um conjunto de instruções que realizam uma tarefa**

### Pesquisa Binária

- Problemas relacionados a busca de um dado usam o algoritmo de **pesquisa binária**

- A entrada para o algoritmo de pesquisa binaria **deve** ser uma **lista ordenada** de elementos

- Caso o elemento buscado esteja na lista, sua **posição é retornada**, caso não, o retorno é none

- Com a pesquisa binária, a cada iteração, eliminamos metade das opções, até restar apenas 1

- Para uma pesquisa de n números, a pesquisa binária precisa de log₂n para retornar o valor correto, enquanto a pesquisa simples precisa de n etapas
    ```
        lista de 8 elementos:
        pesquisa binária -> log₂8 = 3 (Para uma lista de 8 elementos, no pior dos casos precisaríamos de no máximo 3 tentativas)
        
        pesquisa simples - Para uma lista de 8 elementos, no pior dos casos precisaríamos de no máximo 8 tentativas

        lista de 1024 elementos:
        pesquisa binária -> log₂1024 = 10 (Para uma lista de 1024 elementos, no pior dos casos precisaríamos de no máximo 10 tentativas)
        
        pesquisa simples - Para uma lista de 1024 elementos, no pior dos casos precisaríamos de no máximo 1024 tentativas
    ```

- Exercícios
    ```
        1.1 - Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?
            log₂128 = 7 
            Precisaríamos de no máximo 7 tentativas

        1.2 - Suponha que você duplique o tamanho da lista. Qual seria o número máximo de etapas agora?
            log₂256 = 8
            Precisaríamos de no máximo 8 tentativas
    ```

### Tempo de execução

- Pesquisa simples tem o número máximo de tentativas igual ao tamanho da lista (tempo linear O(n))

- Pesquisa binária tem o número máximo de tentativas igual a log₂n (n = tamanho da lista) (tempo logarítmico O(log n))

### Notação Big O

- É uma notação que diz o quão rápido é um algoritmo

- **O tempo de execução de algoritmos crescem com velocidades diferentes**

- Mas a notação Big O não informa o tempo em segundos, ela permite que comparemos o número de operações, ou seja, o quão rápido um algoritmo cresce

- E estabelece o tempo de execução para a pior hipótese

- Exemplos comuns de tempo de execução Big O do mais rápido para o mais lento
    - O(log n), também conhecido como tempo logarítmico. Exemplo: pesquisa binária (tempo logarítmico).

    - O(n), conhecido como tempo linear. Exemplo: pesquisa simples (tempo linear) (*significa passar por todos os itens da lista pelo menos 1 vez).

    - O(n * log n). Exemplo: um algoritmo rápido de ordenação, como a ordenação quicksort.

    - O(n2). Exemplo: um algoritmo lento de ordenação, como a ordenação por seleção.

    - O(n!). Exemplo: um algoritmo bastante lento, como o do caixeiro-viajante (tempo fatorial).


- A rapidez de um algoritmo não é medida em segundos, mas pelo crescimento do número de operações.

- Em vez disso, discutimos sobre o quão rapidamente o tempo de execução de um algoritmo aumenta conforme o número de elementos aumenta.

- O tempo de execução em algoritmos é expresso na notação Big O.

- O(log n) é mais rápido do que O(n), e O(log n) ca ainda mais rápido conforme a lista aumenta.

- Exercícios
    ```
        1.3 - Você tem um nome e deseja encontrar o número de telefone para esse nome em uma agenda telefônica.
            O(log n)

        1.4 - Você tem um número de telefone e deseja encontrar o dono dele em uma agenda telefônica. (Dica: Deve procurar pela agenda inteira!)
            O(n)

        1.5 - Você quer ler o número de cada pessoa da agenda telefônica.
            O(n)

        1.6 - Você quer ler os números apenas dos nomes que começam com A. (Isso é complicado! Esse algoritmo envolve conceitos que são abordados mais profundamente no Capítulo 4. Leia a resposta – você ficará surpreso!)
            O(n)
    ```

### Caixeiro-viajante

- Nesse exemplo, um viajante deseja visitar 5 cidades e quer encontra a menor distância para isso, ou seja, ele precisa analisar cada ordem possível de cidades para visitar.

- Como são 5 cidades, temos um total de 120 operações (5! = 120 -> 5x4x3x2x1 = 120)

- Agora para 6 cidades, precisa-se de 720 operações e para 7 cidades, 5.050 operações

- Ou seja, de maneira geral, para n itens, é necessário n! (fatorial de n) operações para chegar ao resultado (tempo de execução O(n!))

## Capítulo 2 - Ordenação por seleção

### Arrays e listas encadeadas

- Arrays
    - Arrays armazenam valores contiguamente, ou seja, um do lado do outro na memória

    - Como arrays armazenam valores um do lado do outro, quando precisamos adicionar novos elementos ao array, ele é movido e realocado em um espaço de memoria onde caibam todos os itens um ao lado do outro e isso sempre acontece quando adicionamos novos elementos ao array

    - Esse processo torna a adição de novos itens ao array, lento, mas para para resolver isso, podemos reservar espaços na memória, por exemplo, podemos reservar 10 espaços na memória, e o array só seria movido quando fosse adicionado o 11º valor. Contudo, essa prática gera outros problemas

    - Nem sempre usaremos todo o espaço alocado para o array, dessa forma a memória será desperdiçada, pois ninguém mais poderá usar esse espaço al-ocado para o array

    - Se precisarmos adicionar mais itens do que o espaço alocado, o array precisará ser movido

    - Arrays são ótimos se precisarmos ler elementos aleatórios, pois como esses elementos são armazenados sempre um ao lado do outro, sabemos o endereço de cada item do array, ou seja, podemos encontrar qualquer elemento de um array instantaneamente

- Listas encadeadas
    - Nas listas encadeadas, os itens são armazenados em locais aleatórios da memória, onde cada item armazena o endereço do item seguinte

    - Dessa forma, armazenar novos itens a uma lista encadeada é muito fácil, o novo item é armazenado em qualquer lugar da memória e guarda o endereço do item anterior

    - Ou seja, com listas encadeadas nunca precisamos mover os itens do array

    - Contudo, listas encadeadas tem um problema relacionado a leitura dos itens, De forma que, se precisarmos ler o último item, não conseguimos fazer isso, a não ser que lermos item após item começando do primeiro, pois cada item armazena o endereço do item seguinte. Ou seja, precisamos ler o item 1 para conseguir o endereço do item 2 e assim por diante até o último item

    - Assim, listas encadeadas são ótimas para quando precisamos ler um item após o outros, mas se precisamos pular de um item para o outros, a lista encadeada é horrível

- Tempo de execução para operações comuns de arrays e listas
    ```
        |         | Leitura | Escrita |
        | Leitura | O(1)    | O(n)    |
        | Escrita | O(n)    | O(1)    |
        
        *O(n) = tempo de execução linear
        *O(1) = tempo de execução constante
    ```

- Exercícios
    ```
        2.1 - Suponha que você esteja criando um aplicativo para acompanhar as suas finanças. Todos os dias você anotará tudo o que gastou e onde gastou. No final do mês, você deverá revisar os seus gastos e resumir o quanto gastou. Logo, você terá um monte de inserções e poucas leituras. Você deverá usar um array ou uma lista para implementar este aplicativo?
            Nesse caso, onde temos muitas operações de inserção de itens e poucas operações de leitura, a melhor opção seria o uso de uma lista encadeada.  

            * Array tem leitura rápida e inserção lenta

            * Lista encadeadas tem leitura lenta e inserção rápida. Contudo, a leitura de uma lista encadeada só se mostra lenta quando precisamos ler itens aleatórios, mas quando lemos todos os itens da lista, a lista encadeada terá também uma boa velocidade de leitura 
    ```

- Inserindo algo no meio da lista
    - Se quisermos adicionar elementos no meio de uma lista, listas encadeadas são melhores nesses casos, porque basta mudar o endereço para qual o elemento anterior está apontando

    - Já nos arrays, devemos mover todos os itens que estão abaixo do endereço de inserção, e no pior dos casos, se não houver espaço será necessário mover todo o array para um novo local

- Deleções
    - Quando precisamos deletar um elemento, listas encadeadas novamente tem vantagem, porque basta mudar o endereço para qual o elemento anterior está apontado

    - Em arrays, todos os itens precisam ser movidos quando um elemento é deletado

    - Ao contrário da inserção, a eliminação de elementos sempre funcionará. A inserção poderá falhar quando não houver espaço suficiente na memória

    ```
        |          | Leitura | Escrita |
        | Leitura  | O(1)    | O(n)    |
        | Escrita  | O(n)    | O(1)    |
        | Inserção | O(n)    | O(1)    |
        
        *O(n) = tempo de execução linear
        *O(1) = tempo de execução constante
        *Inserções e deleções terão tempo de execução O(1) somente se você puder acessar instantaneamente o elemento a ser deletado.
        *É uma prática comum acompanhar o primeiro e último item de uma lista encadeada para o tempo de execução para deleta-lo seja O(1)
    ```

- Tipos de acesso
    - Acesso aleatório
        - Permite acesso instantâneo ao item desejado, ou seja, se quisermos ler o décimo item de um array, podemos pular direto para ele

    - Acesso sequencial
        - Significa ler os elementos, um por um, começando pelo primeiro

        - Listas encadeadas só podem lidar com acesso sequencial. Se quisermos ler o décimo elemento de uma lista encadeada, primeiro temos que ler os nove elementos anteriores para chegar ao endereço do décimo elemento

- Exercícios
    ```
        2.2 - Suponha que você esteja criando um aplicativo para anotar os pedidos dos clientes em um restaurante. Seu aplicativo precisa de uma lista de pedidos. Os garçons adicionam os pedidos a essa lista e os chefes retiram os pedidos da lista. Funciona como uma fila. Os garçons colocam os pedidos no final da fila e os chefes retiram os pedidos do começo dela para cozinhá-los. Você usaria um array ou uma lista encadeada para implementar essa lista? (Dica: listas encadeadas são boas para inserções/eliminações e arrays são bons para acesso aleatório. O que fazer neste caso?)

            Usaria uma lista encadeada, de modo que a inserção e deleção são feitas sequencialmente e não há a necessidade de acesso aleatório.

        2.3 - Vamos analisar um experimento. Imagine que o Facebook guarda uma lista de usuários. Quando alguém tenta acessar o Facebook, uma busca é feita pelo nome de usuário. Se o nome da pessoa está na lista, ela pode continuar o acesso. As pessoas acessam o Facebook com muita frequência, então existem muitas buscas nessa lista. Presuma que o Facebook usa a pesquisa binária para procurar um nome na lista. A pesquisa binária requer acesso aleatório – você precisa ser capaz de acessar o meio da lista de nomes instantaneamente. Sabendo disso, você implementaria essa lista como um array ou uma lista encadeada?

            Usaria um array, já que o acesso precisa ser aleatório, caso usasse-mos uma lista encadeada, em cada consulta precisaríamos ler todos os elementos da lista até achar o central

        2.4 - As pessoas se inscrevem no Facebook com muita frequência também. Suponha que você decida usar um array para armazenar a lista de usuários. Quais as desvantagens de um array em relação às inserções? Em particular, imagine que você está usando a pesquisa binária para buscar os logins. O que acontece quando você adiciona novos usuários em um array?

            Arrays levam desvantagem na inserção de novos elementos porque a cada nova inserção, caso não exista mais espaço contiguamente, todo o array será movido para um novo endereço onde todos os elementos sejam alocados um do lado do outro, e isso acontece em toda nova inserção, caso não haja espaço

            Quando adicionamos novos usuários em um array, esse array é movido na memória para um endereço onde todos os itens fiquem um ao lado do outro

            E no caso do uso da pesquisa binária, a cada pesquisa será necessária a ordenação do array, pois um novo usuário é sempre adicionado ao final do array. A pesquisa binária só funciona em arrays ordenados

        2.5 - Na verdade, o Facebook não usa nem arrays nem listas encadeadas para armazenar informações. Vamos considerar uma estrutura de dados híbrida: um array de listas encadeadas. Você tem um array com 26 slots. Cada slot aponta para uma lista encadeada. Por exemplo, o primeiro slot do array aponta para uma lista encadeada que contém os usuários que começam com a letra A. O segundo slot aponta para a lista encadeada que contém os usuários que começam com a letra B, e assim por diante. Suponha que o Adit B. se inscreva no Facebook e você queira adicioná-lo à lista. Você vai ao slot 1 do array, a seguir para a lista encadeada do slot 1, e adiciona Adit B. no final. Agora, suponha que você queira procurar o Zakhir H. Você vai ao slot 26, que aponta para a lista encadeada de todos os nomes começados em Z. Então, procura pela lista até encontrar o Zakhir H. Compare esta estrutura híbrida com arrays e listas encadeadas. É mais lento ou mais rápido fazer inserções e eliminações nesse caso? Você não precisa responder dando o tempo de execução Big(O), apenas diga se a nova estrutura de dados é mais rápida ou mais lenta do que os arrays e as listas encadeadas.

            Para buscas – mais lenta do que arrays, mais rápida do que listas encadeadas. 
            
            Para inserções – mais rápida do que arrays, mesmo tempo que as listas encadeadas. 
            
            Portanto é mais lenta para buscas que os arrays, porém mais rápida ou igual às listas encadeadas para tudo.
    ```

### Ordenação por seleção

- O algoritmo de **ordenação por seleção** consiste em criar um novo array com os itens ordenados como desejado. 

- Por exemplo, em uma lista de artistas temos um contador de play, e queremos ordenar essa lista do artistas com mais plays para o que tem menos. Para isso, pegamos o artista mais escutado da lista e adicionamos em outra lista, e isso é feito para todos os artistas. No final teremos uma lista ordenada do artista com mais plays pro que teve menos

- *O tempo de execução O(n) significa que você precisa passar por todos os elementos da lista uma vez. Por exemplo, executar uma pesquisa simples na lista de artistas significa olhar para cada artista uma vez.

- Para encontrar o artista com maior número de plays precisamos verificar cada item da lista. Isso tem tempo de execução O(n). Então temos uma operação com tempo de execução O(n) e precisamos repeti-la n vezes. Logo, isso tem tempo de execução O(n²) ou O(n x n)

- A ordenação por seleção é um algoritmo bom, mas não é muito rápido

## Capítulo 3 - Recursão
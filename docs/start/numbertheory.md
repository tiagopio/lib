# Teoria dos Números
Teoria dos números é um ramo da matemática que estuda númeors inteiros. Nessa seção, assumiremos que todos os números são inteiros.

# Divisores
Um número $a$ é chamado de divisor ou fator de um número $b$ se $a$ divide $b$. Escrevemos $a \mid b$ e temos a seguinte propriedade:

$$
b = a \cdot k, k \in \mathbb{Z}
$$  

Por exemplo, os divisores de $24$ são $1, 2, 3, 4, 6, 8, 12$ e $24$, pois $24 = 1 \cdot 24, 24 = 2 \cdot 12,$ $24 = 3 \cdot 8, etc.$

# Primos
Um número $n > 1$ é primo se seus únicos divisores positivos são $1$ e $n$. Por exemplo, $7, 19$ e $41$ são primos, mas 35 não é primo pois $5 \cdot 7 = 35$. Para todo número $n > 1$ existe uma única fatoração em primos:

$$
n = p_1^{\alpha_1} p_2^{\alpha_2} \cdots p_k^{\alpha_k},
$$

Em que $p_1, p_2, ..., p_k$ são primos distintos e
$\alpha_1, \alpha_2, \cdots, \alpha_k$ são inteiros positivos. Por exemplo, a fatoração do número 84 é:

$$
    84 = 2^{2} \cdot 3^{1} \cdot 7^{1}
$$

## Número de divisores
O número de divisores de um número $n$ é:

$$
\tau(n) = \prod_{i=1}^{k} (\alpha_i + 1),
$$

Porque para todo primo $p_i,$ existem $\alpha_i$ formas de escolher quantas vezes ele aparece no divisor. Por exemplo, o número de divisores de 84 é:

$$
\tau(84) = 3 \cdot 2 \cdot 2 = 12.
$$

## Soma dos fatores
A soma dos fatores de $n$ é:

$$
\sigma(n) = \prod_{i=1}^{k} (1 + p_i + \cdots + p_i^{\alpha_i}) = \prod_{i=1}^{k} (\frac{p_i^{\alpha_i+1} - 1} {p_i - 1}),
$$

Pois podemos escolher qualquer potência dos primos presentes na fatoração de $n$, de $p_i^{0} = 1$ até $p_i^{\alpha_i}$. A simplificação pode ser feita pela soma de progressão geométrica:


\begin{align*}
& S = 1 + p_i + \cdots + p_i^{\alpha_i -1} +  p_i^{\alpha_i} \\
& S \cdot p_i = p_i + p_i^{2} + \cdots + p_i^{\alpha_i}+ p_i^{\alpha_i + 1} \\
& S \cdot p_i - S = p_i^{\alpha_i+1} - p_i^{\alpha_i} + p_i^{\alpha_i} - \cdots + \cdots - p_i + p_i - 1 \\
& S \cdot (p_i - 1) = p_i^{\alpha_i+1} - 1 \\
& S = \frac{p_i^{\alpha_i+1} - 1}{p_i - 1}
\end{align*}


Por exemplo, a soma dos fatores de 84 é:

$$
\sigma(84) = \frac{2^{3}-1}{2-1} \cdot \frac{3^{2}-1}{3-1} \cdot \frac{7^{2}}{7-1} = 
7 \cdot 4 \cdot 8 = 224
$$


## Produto dos divisores
O produto dos divisores de $n$ é:

$$
\mu(n) = n^{\tau(n)/2},
$$

Porque podemos formar $\tau(n)/2$ pares de divisores, cada um com produto igual à $n$. Por exemplo, os fatores de $84$ produzem seis pares: $1 \cdot 84, 2 \cdot 42, 3 \cdot 28, 4 \cdot 21, 6 \cdot 14, 7 \cdot 12$ e o produto dos fatores é $\mu(84) = 84^{6} = 351298031616$.

## Número perfeito
Um número $n$ é chamado de perfeito se $n = \sigma(n) - n$, ou seja, $n$ é igual a soma dos seus fatores de $1$ à $n-1$. Por exemplo, o número 28 é perfeito pois $28 = 1 + 2 + 4 + 7 + 14$.


# Quantidade de primos
Existem infinitos números primos. Assuma que exista um número finito de primos, portanto podemos criar um conjunto $\{p_1, p_2, \cdots, p_n\}$ contendo todos os primos. No entanto, podemos criar um novo primo $p = p_1 \cdot p_2 \cdots p_n + 1$ que é maior que todos os primos no conjunto. Logo, por contradição, temos infinitos números primos.

# Densidade de primos
A densidade de números primos significa o quão frequente são os primos entre os números. Seja $\pi(n)$ a quantidade de primos entre $1$ e $n$. Temos a aproximação:

$$
    \pi(n) \approx \frac{n}{\ln(n)}
$$

Por exemplo $\pi(10) = 4,$ pois temos $4$ primos entre $1$ e $10:$ $2, 3, 5, 7$.  

# Algoritmos básicos

## Identificar se um número é primo 

```cpp title="prime.cpp"
bool prime(int n) {
    if (n < 2) return false;
    for (int x = 2; x*x <= n; x++) {
        if (n%x == 0) return false;
    }
    return true;
}
```

## Fatorar um número

```cpp title="factor.cpp"
vector<int> factors(int n) {
    vector<int> f;
    for (int x = 2; x*x <= n; x++) {
        while (n%x == 0) {
            f.push_back(x);
            n /= x;
        }
    }
    if (n > 1) f.push_back(n);
    return f;
}
```

# Crivo de Eratóstenes

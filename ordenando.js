// Funções de ordenação e embaralhamento solicitadas na prática.
const swap = (vetor, posicaoA, posicaoB) => {
  [vetor[posicaoA], vetor[posicaoB]] = [vetor[posicaoB], vetor[posicaoA]];
};

const shuffle = (vetor, trocas = vetor.length * 2) => {
  for (let i = 0; i < trocas; i++) {
    const a = Math.floor(Math.random() * vetor.length);
    const b = Math.floor(Math.random() * vetor.length);
    swap(vetor, a, b);
  }
  return vetor;
};

const bubble_sort = (vetor) => {
  for (let i = 0; i < vetor.length - 1; i++) {
    let houveTroca = false;
    for (let j = 0; j < vetor.length - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
        houveTroca = true;
      }
    }
    if (!houveTroca) break;
  }
  return vetor;
};

const selection_sort = (vetor) => {
  for (let i = 0; i < vetor.length - 1; i++) {
    let menor = i;
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[menor]) menor = j;
    }
    if (menor !== i) swap(vetor, i, menor);
  }
  return vetor;
};

// Particiona o vetor em torno do pivot e retorna a posição final do pivot.
const particionamento = (vetor, inicio, fim, pivot) => {
  let indice = inicio;
  for (let i = inicio; i < fim; i++) {
    if (vetor[i] <= pivot) {
      swap(vetor, i, indice);
      indice++;
    }
  }
  swap(vetor, indice, fim);
  return indice;
};

const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
  if (inicio < fim) {
    const pivot = vetor[fim];
    const p = particionamento(vetor, inicio, fim, pivot);
    quick_sort(vetor, inicio, p - 1);
    quick_sort(vetor, p + 1, fim);
  }
  return vetor;
};

// Disponibiliza as funções para o trecho clássico de script da página.
Object.assign(window, { swap, shuffle, bubble_sort, selection_sort, quick_sort, particionamento });

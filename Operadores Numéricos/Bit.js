4 | 3; // 7
/**
 * Operador OR.
 * CONDIÇÃO => Caso exista 1 na operação, o resultado será 1
 * A função padStart(32, 0), "Completa" o número 4 em binário (100) com zeros, até completar 32 caracteres, pois todas
 * as operações envolvendo binários, são feitas com 32 bits;
 * 
 * 4 em binário = (4).toString(2).padStart(32, 0) = '00000000000000000000000000000100';
 * 3 em binário = (3).toString(2).padStart(32, 0) = '00000000000000000000000000000011';
 *
 * Resultando
 * 7 em binário = (7).toString(2).padStart(32, 0) = '00000000000000000000000000000111';
 */

3 & 1;

/**
 * Operador AND;
 * CONDIÇÃO => Caso ambos os bits sejam 1, o resultado é 1, caso contrário o resultado será 0;
 * 3 em binário = (3).toString(2).padStart(32, 0) = '00000000000000000000000000000011';
 * 1 em binário = (1).toString(2).padStart(32, 0) = '00000000000000000000000000000001';
 */

 5 ^ 2;
 /**
  * Operador XOR (conhecido como OU exclusivo);
  * Condição => Apenas 1 com 0 tem resultado 1;
  * 5 em binário = (5).toString(2).padStart(32, 0) = '00000000000000000000000000000101';
  * 2 em binário = (2).toString(2).padStart(32, 0) = '00000000000000000000000000000010';
  */

  
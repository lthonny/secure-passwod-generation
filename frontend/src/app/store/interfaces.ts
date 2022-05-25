export interface IGeneratePassword {
    numbers: boolean;
    lowercase: boolean;
    uppercase: boolean;
    excludeSimilarCharacters: boolean;
    lengthPassword: number;
  }
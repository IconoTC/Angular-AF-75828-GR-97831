type Gender = 'male' | 'female' | 'other';

type Country = 'es' | 'fr' | 'de' | 'it' | 'other';

export interface LoginData {
  email: string; // From Input email
  password: string; // From Input password
}

export interface User extends LoginData {
  id: string; // From crypto.uuid
  name: string; // From Input text
  gender: Gender; // From RadioButtons
  country: Country; // From Select
  birthDate: Date; // From DatePicker
  comments: string; // From Textarea
  termsAcceptance: boolean; // From Checkbox
}

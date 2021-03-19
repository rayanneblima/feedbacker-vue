import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators Utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório!')
  })

  it('should give an error with less than three character payload', () => {
    expect(validateEmptyAndLength3('aa')).toBe('*Este campo deve conter no mínimo 3 caracteres!')
  })

  it('should returns true when input pass a correct param', () => {
    expect(validateEmptyAndLength3('rayanne')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório!')
  })

  it('should give an error with a invalid param', () => {
    expect(validateEmptyAndEmail('email@')).toBe('*Este campo precisa ser um e-mail!')
  })

  it('should return true when input pass a correct param', () => {
    expect(validateEmptyAndEmail('email@email.com')).toBe(true)
  })
})

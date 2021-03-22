export function validateEmptyAndLength3 (value) {
  if (!value) {
    return '*Este campo é obrigatório!'
  }

  if (value.length < 3) {
    return '*Este campo deve conter no mínimo 3 caracteres!'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return '*Este campo é obrigatório!'
  }

  const isValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i.test(value)
  console.log(isValid)

  if (!isValid) {
    return '*Este campo precisa ser um e-mail!'
  }

  return true
}

module.exports = (req, res, next) => {
  const { style } = req.body
  const age = parseInt(req.body.age)
  const height = parseInt(req.body.height)
  const isClassic = style === 'classic'
  const isFreestyle = style === 'freestyle'

  const delta = {
    min: 0,
    max: 0
  }

  if (age >= 5 && age <= 8) {
    delta.min += 10
    delta.max += 20
  }

  if (isFreestyle) {
    delta.min += 10
    delta.max += 15
  } else if (isClassic) {
    delta.min += 20
    delta.max += 20
  }

  const limits = {
    min: height + delta.min,
    max: height + delta.max
  }

  if (isClassic) {
    limits.min = limits.min > 207 ? 207 : limits.min
    limits.max = limits.max > 207 ? 207 : limits.max
  }

  res.json({ limits })
}

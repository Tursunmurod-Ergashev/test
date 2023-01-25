const logger = require("../env/logger")

exports.findPost = async (req, res) => {

    const abs = new nameSchema({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email

    })
    const nabe = await abs.save()
    res.send(nabe)
}
exports.findGetId = async (req, res) => {
    const nev = await nameSchema.findById(req.params.id)
    res.send(nev)
}
exports.findPutId = async (req, res) => {
    const emp = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }
    const my = await nameSchema.findByIdAndUpdate(req.params.id, { $set: emp })
    res.send(my)
}
exports.findDeleteIf = async (req, res) => {
    const dale = await nameSchema.findByIdAndDelete(req.params.id)
    res.send(dale)
}
exports.findGet = async (req, res) => {
    const mass = await nameSchema.find({})
    res.send(mass)
}
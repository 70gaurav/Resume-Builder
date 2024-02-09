import User from "../models/User.js";

export const saveResume = async (req, res) => {
    const { id } = req.body;
    try {
        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.status(400).send({ error: "User not found" });
        }
        console.log(user)
        const resume = req.file;

        await User.findByIdAndUpdate(id, {
            resume: `http://localhost:4000/app/uploads/${resume.filename}`
        });

        return res.status(200).send({ message: "Resume saved successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Internal server error" });
    }
};

export const demo = async(req, res) => {
    res.status(200).send({message: "Hello world"})
}

import express from "express";
import {Coin} from "../models/modelManager.js";

const router = express.Router();

router.post("/", async (req, res) => {
	const {code} = req.body;

	if (await Coin.findOne({code})) {
		return res
			.status(200)
			.json({ok: false, error: {code: "Code Already existed"}});
	}

	const coin = new Coin({code});
	await coin.save();

	return res.status(200).json({ok: true, data: {result: "Created!"}});
});

export default router;

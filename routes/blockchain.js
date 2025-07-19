// library
import express from 'express';
// local
import { getChainInfo } from '../services/blockchain.js';

const router = express.Router();

// route the end points
router.route('/info').get(getChainInfo);

export default router;

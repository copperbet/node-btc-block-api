import { getClient } from '../config/btcNodeConfig.js';
import expressAsyncHandler from 'express-async-handler';

/**
 * @swagger
 * /blockchain/info:
 *   get:
 *     tags:
 *     - Blockchain
 *     summary: Get current Bitcoin chain tip info
 *     responses:
 *       200:
 *         description: Bitcoin chain info
 */
export const getChainInfo = expressAsyncHandler(async (req, res, next) => {
  const payload = {
    jsonrpc: '1.0',
    id: 'curltest',
    method: 'getblockchaininfo',
    params: [],
  };

  const info = await getClient().post('/r', payload);

  return res.status(200).json({
    success: true,
    data: info.data,
  });
});

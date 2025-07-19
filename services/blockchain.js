import asyncHandler from '../async/async.js';

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
export const getChainInfo = asyncHandler(async (req, res, next) => {
  return res.status(200).json({
    success: true,
  });
});

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.url) {
    console.log(req.query);
    getLinkPreview(req.query.url as string, {
      followRedirects: `manual`,
      handleRedirects: () => true,
    }).then((data) => {
      res.status(200).send(data);
    });
  } else {
    res.status(400).json({
      msg: "url is not valid",
    });
  }
}

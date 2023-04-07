import ytdl from 'ytdl-core';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

export const converterController = async (req, res) => {
  try {
    const { url } = req.body;
    const videoID = ytdl.getURLVideoID(url);
    const videoReadableStream = ytdl(url, { filter: 'audioonly' });
    const filePath = `./${videoID}.mp3`;

    const mp3Stream = fs.createWriteStream(filePath);
    const pipelinePromise = promisify(pipeline);

    await pipelinePromise(videoReadableStream, mp3Stream);
    res.download(filePath, (err) => {
      if (err) {
        console.error(err);
        res.status(500).end();
      } else {
        console.log('File downloaded successfully');
      }
      // Cleanup
      fs.unlink(filePath, (err) => {
        if (err) console.error(err);
        console.log('Temporary file deleted');
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};


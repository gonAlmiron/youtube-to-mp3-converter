 import youtubeMp3Converter from 'youtube-mp3-converter'

 // creates Download function

 const convertLinkToMp3 = youtubeMp3Converter(pathToSaveFiles)
 
 // Downloads mp3 and Returns path were it was saved.
 const pathToMp3 = await convertLinkToMp3('https://www.youtube.com/watch?v=_cyND_1y1k0')
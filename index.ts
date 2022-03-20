import { writeFileSync } from "fs";

export const subtitles = `0
00:00:43,335 --> 00:00:45,711
Od czasu do czasu,

1
00:00:47,999 --> 00:00:51,073
zakradaĹ‚a siÄ™ do domu Yamagi.

2
00:00:52,718 --> 00:00:53,975
Yamagi?

3
00:00:54,720 --> 00:01:00,726
To nazwisko jej pierwszej miĹ‚oĹ›ci.
SÄ… kolegami z klasy.
`;

writeFileSync(
  "./results.srt",
  subtitles
    .replace(/Ä…/g, "ą")
    .replace(/Ä‡/g, "ć")
    .replace(/Ä™/g, "ę")
    .replace(/Ä�/g, "Ę")
    .replace(/Ã³/g, "ó")
    .replace(/Ăł/g, "ó")
    .replace(/Ă“/g, "Ó")
    .replace(/Å‚/g, "ł")
    .replace(/Ĺ‚/g, "ł")
    .replace(/Ĺ�/g, "Ł")
    .replace(/Å„/g, "ń")
    .replace(/Å›/g, "ś")
    .replace(/Ĺš/g, "Ś")
    .replace(/Ĺ›/g, "ś")
    .replace(/Å¼/g, "ż")
    .replace(/Ĺ»/g, "Ż")
    .replace(/ĹĽ/g, "ż")
    .replace(/Åº/g, "ź")
    .replace(/Ĺş/g, "ź")
    .replace(/Å�/g, "Ł")
    .replace(/Ã“/g, "Ó")
    .replace(/Ã¼/g, "ü")
    .replace(/Ã¤/g, "ä")
    .replace(/Å‘/g, "ö")
    .replace(/Å�/g, "Ö")
);

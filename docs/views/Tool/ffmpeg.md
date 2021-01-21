---
title: FFmpeg使用
date: 2021-01-21
categories:
  - 工具
tags:
  - 多媒体
  - 转码
---

::: tip
![FFmpeg_Logo_new](http://image-hosting-tsanfer.oss-accelerate.aliyuncs.com/img/FFmpeg_Logo_new.svg)
:::

<!-- more -->

## 工具简介

FFmpeg is the leading multimedia framework, able to **decode**, **encode**, **transcode**, **mux**, **demux**, **stream**, **filter** and **play** pretty much anything that humans and machines have created. It supports the most obscure ancient formats up to the cutting edge. No matter if they were designed by some standards committee, the community or a corporation. It is also highly portable: FFmpeg compiles, runs, and passes our testing infrastructure [FATE](http://fate.ffmpeg.org) across Linux, Mac OS X, Microsoft Windows, the BSDs, Solaris, etc. under a wide variety of build environments, machine architectures, and configurations.

### 常用命令

```powershell
.\scrcpy.exe -m 600 -b 100M --max-fps 60 --window-title 'Pixel XL'  --always-on-top -Sw -t --push-target /sdcard/Download/From_computer/

E:\Stand_alone\scrcpy\scrcpy.exe --max-fps 60 --window-title 'Pixel XL'  --always-on-top -Sw -t --push-target /sdcard/Download/From_computer/

--max-size -m # short version high
--bit-rate -b
--max-fps
--stay-awake -w
--turn-screen-off -S
--show-touches -t
```

```powershell
#命令

#合并
FFmpeg -f concat -i list.txt -c copy concat.mp4

-f fmt #force
-i url #input
-c #codec (copy (output only) to indicate that the stream is not to be re-encoded.)

#剪切
ffmpeg -ss 00:01:30 -t 00:00:20 -i input.mp4 -c copy output.mp4

-ss position #seeks
-t duration #time

#压缩
ffmpeg -i input.mp4 -vf scale=-1:1080 -b:v 500k -bufsize 500k -c:v hevc_nvenc -c:a copy output_1080.mp4

-vf #-filter:v
-b #bitrate
-bufsize #buffer size
-c:v #-codec:v
-c:a #-codec:a

#提取音频
ffmpeg -i input.mp4 -vn -y -acodec copy output.m4a
#合并音视频，并替换原视频的音频
ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a copy -strict experimental -map 0:v:0 -map 1:a:0 output.mp4
```

### list.txt（批处理）

```powershell
file ./split.mp4
file ./split1.mp4
```

> 本文由[Tsanfer's Blog](https://tsanfer.xyz) 发布！
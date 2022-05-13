---
title: "Media Server Setup Pt. 1: Plex"
date: 2022-02-21
author: MrMeatBones
desc: "So you're ready to take the plunge and build an automated media server? Fantastic! This guide will take you through every required step, as well as some optional steps that I personally find to be quite useful."
img: https://morrismotel.com/content/images/size/w1920/2022/03/hero-blog-modern-layout-1-scaled-1.jpg
imgWidth: 800
imgHeight: 500
tags: 
    - servarr
---

## Setting up Servarr on Windows

So you're ready to take the plunge and build an automated media server? Fantastic! This guide will take you through every required step, as well as some optional steps that I personally find to be quite useful. By the end of this, you will have the following: a fully automated media search/download stack for movies, tv and music as well as the ability to stream it all from your home pc to any device you own using Plex. Parts of this guide will be objective fact, and some will be subjective, such as when we get to quality profiles. I will denote what is subjective when we get there. 

Some may look at this and be immediately disgusted that we’re using Plex instead of Jellyfin. And to those people I would simply say, click this link here. We have a Jellyfin side to this guide as well! Ain't that great.

The requirements for this guide are pretty basic and are as follows:

1. A Windows 7*/10/11 PC, either your main pc or a spare
2. An internet connection (duh)
3. An understanding of how to port forward (Required for streaming outside of home)
4. An understanding of how to use torrents if using torrents
5. Relative confidence with the Windows platform

*Windows 7 is technically supported, but it is STRONGLY recommended to upgrade to windows 10 before starting this

With that out of the way, let’s begin!

## Installing Plex Media Server/Player

First step is to create a plex account then install Plex as a media server, and the player if you plan to watch content from the same machine. Do ***not*** use the Plex web player if at all possible, it's total crap and we've had nothing but issues with it.

We want to click this link [here](https://www.plex.tv/media-server-downloads/#plex-media-server) and select the latest PMS build for windows. Download and install that. 

![](https://lh5.googleusercontent.com/f2flxfvHaeV8xpJ0UXgNOvd1AQXmeuMP4FMiaNytCi_Ui4hKD8OGCoM_lpt3XTHYkvjQRbkhZk8PaioDR2-vjtR8Y4BQq4NdpQp4AtpeTcogG2ifQY0vBLylV9u8aF0RJpJNr_a0)

While that is downloading and installing, go to the top of the page and click sign up, then complete sign up.

If you are planning to watch content on the same machine you’re installing all this one, click this link [here](https://www.plex.tv/media-server-downloads/#plex-app) and download “Plex for Windows”. Run and install that. Sign into the account you made earlier after the install is done.

Once PMS is installed, click Launch. It will open up a browser window. Sign in to your account and begin configuration. First, name your server, then make sure you check “Allow me to access my media outside my home”. Click Next. It'll think for a bit then bring you to this screen.
![](https://lh6.googleusercontent.com/QIb9pXoWkYigPFzzak8CzjCQrAEUzqWj-aKZpyHAy2Xw_WOB7_9wCbo25w53DEV_WfY1WiwEOHho-BZESqdwJf6N8wJ7KhkKcfOZt5fEnWl4WlIvSVBFJXwPawLuw2rLdja-1pG7)
This is where you’re going to create your libraries. Click Add Library and select the media type you want. In this guide we’re adding TV, Music, and Movies so we’ll select TV first.
![](https://lh4.googleusercontent.com/sAAGmkhvDgcu8Z1q3Erm2UZ913KXFSG4NrXPqohP3RtO3-NgSa3i85fu1k7nQ2sQawbxuVe1WEeYV_RTwqML9Buxvu0pbl1-aybpBFZMRji-THbhDmyhgs0MoAcEp3-rpmErFCkq)
Name the library if you want then click next.
![](https://lh6.googleusercontent.com/T19vRP6SvFEjpIonIAWepY2W3HFnOVX71HoKJKXrC0wpcAyfxewxqXRVdFMuq-5Lt2HJyThn9P8ajlY_7F-wuZBIodbCstiwgvhJdhzkbeq7TV01KEip9e3jcgVmjiMaTGEZbzCj)
Now, open file explorer and create the actual folders where you’re going to store the media. Ours sit under D:\Plex but they can be wherever we want. 

![](https://lh5.googleusercontent.com/gB_4JhTEMYv-JbWo0UduSzkMoRlYpvJaxAi1KxAU1apQAdP365FulRirqL8KREBioKkvfK6_2_Ab7OKidOMuBsUVsabBANBP5g6Jw57Ykaq6LFGYsCq5k8FMXNCspwYPj8-XT_DN)

Next go back into your web browser and select “Browse For Media Folder”. Navigate to the correct folder and select it then select add folder. 

![](https://lh3.googleusercontent.com/36W5MHneMZZKHLhMdAXjcGD9pr0df2p6g3uisj0KGQSiYqhlWp3aPAba156dlzUXPM-pDaau25n_oMiVdbao7uat0-1eaLKt77cnoPmrmdGZVDyrsZmkeTrOTcbGSPUNj3z5D6OB)

Select “add” then select “add library”. Your screen will look like this.

![](https://lh4.googleusercontent.com/qoWFkLNMBX9xjFT4hfLqDrrIl7cAW7Q7OTMpl0JJyOPjso25ORht_AwY7O9BmfE0vhfw_SS5owOnd4G4_1pV-BoJnTOz0Db4DFkYS50_WOBrZ0IL-ObWX_MOxAhjOlbWr-TwPGyA)

Repeat the steps above for Movies and Music, making sure to select the correct media type and folder. At the end it should look like this. If it does, select next, then finish setup.
![](https://lh5.googleusercontent.com/rVhjAVTuT1uHszq_SRhEB-gjvPDrU_mfxrsg8xz5TtUPWhuDNaXs9YpXijvYbGH_yvkCbzYOULFCVxkOVgpoSC0tslN9g8wMkA_ocl2eqU_mC7kEAUxRaA85jlZqBILPDxkmyolW)

Click “Next” on the following pages until you reach a screen that looks like this.
![](https://lh5.googleusercontent.com/_AMC-Be8yO4RaKYD83BUJwaQ8RcL9HnOfdtsle7PXMRuRjdla3KHMarD_O6W6SvxcmAWJ4UJKQEa-y_p2HRzWbtyBrdgp0iWvbFFv1EY8gM80tjuo7CJLMM6B3gMCdlZd4UTL4yN)
The first thing you’ll notice is a bunch of content on the home page that isn’t yours. Plex has a bunch of add supported stuff, which (in my opinion) sucks. If you want to only show what you add to the server, simply click More > at the bottom of the sidebar then the pin icons underneath the Plex Categories to unpin them from your home page. Do the reverse for folders in your server name to pin those to the homepage.
![](https://lh6.googleusercontent.com/9abjESsb7Xy7AI-YyHCCd5ewAHyIMXBDvUZtFQvmZjQb4OLsRVJhxawOPoDJB0H4QGXpNNmAR6I0bqZxxlE5vdt3dbJc6P5I2UpxhVhJJy-h8p4kXkY77mLEmOL6sXA2m1IR0gMj)
Now your homepage will be empty with your folders on the left hand side.

![](https://lh3.googleusercontent.com/cI4Ar0VLkHuFgsWF5dtU5Fe7g6EcmZEoA_EAoLmuc9lsVS_3yROHgzPdQ_qRuBnl7wlpXY2ikjYWA_FEs_lwTsZk2S2-lbgQyX0BfqKtLCBsg0_xXLEBO8_O4Qum7UxqTCHf2JO1)

Now that we have a base for media, let's move onto filling it with media.

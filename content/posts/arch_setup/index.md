---
title: "Arch Setup"
description: "Personal Arch i3 rice dotfiles setup"
date: 2022-04-02T19:54:44+01:00
author: simonkeyd
cover:
  image: "cover.jpg"
  relative: true
aliases:
 - "/arch-setup"
tags:
 - linux
 - arch
 - i3
 - dotfiles
draft: false
---

## Introduction
Ricing a Linux distribution is about bringing back some Pimp My Ride souvenirs. Paul Walker's way. In other word it is about customizing a distribution to your liking but mostly to flex on [`r/unixporn`](https://reddit.com/r/unixporn). Alongside the aesthetic aspect one of my main goal when 'ricing' is to improve my productivity and efficiency. I like to touch the mouse as little as possible.

This article is about my personal Arch Linux rice. You will find a showcase, infos on each components and some documentation about these configs installation.

## Showcase
![Development setup](/arch_setup/dev_music.jpg)
![Another development setup](/arch_setup/dev_fzf.jpg)
![Miscelleneaous tasks](/arch_setup/misc.jpg)
![Mandatory \*fetch](/arch_setup/fetch_music.jpg)

## Components list
{{< terminal title="tl;dr" >}}
``` yaml
components:
  os: Arch Linux
  wm: i3-gaps
  aur helper: yay
  terminal emulator: alacritty
  terminal multiplexer: tmux
  shell: zsh
  editor: vim
  status bar: polybar
  start menu: rofi
  compositor: picom
  themeing: pywal
  main font: DroidSansMono, Iosevka and feather
  dotfiles management: yadm

```
{{< /terminal >}}

### Operating System
`Arch Linux` is a `GNU/Linux` distribution that comes with the bare minimum on which you only install the needed pieces. One of the main counterpart being the default installation process which is not as simple as most GNU/Linux distro wizard (eg. Debian/Ubuntu). You have to get your hand dirty to get a base Arch install working. Even though nowadays you can find well made community Arch [install wizard](https://github.com/archlinux/archinstall).

### Window Manager
I do not use a full desktop environment but only one of the main component that composes it: a window manager (wm). It is only designed to - as the name implies - handle windows (opening, resizing, closing, decorating).
All WMs are not equal. A lot of ricers use tiling window managers which organize and split the screen so that tiles (opened programs) don't overlap with each other. I am personaly used to and really like one of the the most famous one: [`i3-gaps`](https://github.com/Airblader/i3). It is a fork of `i3wm` with additional gap feature that allows one to configure spacing between tiles.
I pimped my configuration to my needs so that I have a practical shortcut for every actions that I commonly perform (resize, move, set brightness, etc)

### AUR Helper
Arch User Repository is a package repository powered by the community. In order to install packages from this repo in a hassle-free way one can use a Pacman (default Arch package manager) wrapper. I'm using one of the best which called Yet Another Yogurt (`yay`).

### Windows Manager Overload
A Window Manager can be a bit harsh when used alone. I personally use the following set of packages to please the eye and ease the use of my distribution. The following are pretty common but the list is non-exhaustive:
* Status Bar: Bar used to display different informations informations. I am running a single top polybar bar that I tweaked to display workspaces, connected network interface, volume level, playing song, etc.
* Start menu: I recently moved from `demnu` to `rofi`. These are quick start menu - à la xfce-appfinder or M$ Windows run menu (Win+R) - on steroids. It can launch standard programs or run commands but one can also set up all kinds of aliases, etc. And of course as most of programs used by ricers it can be **themed**
* Terminal/shell related: I use `Termite` as my main terminal emulator and most of the time I'm running `tmux` in it. Tmux is a terminal multiplexer - which means that it reduces my use of pure tiling WM features :no_mouth:. Finally I use the classic `zsh`/`oh-my-zsh` combo because I'm a lazy ass.
* Compositor: i3 is not a compositor WM. In order to add some shadow or configure the opacity of the windows that Xorg renders I choosed to use `picom` (formerly known as `compton`).
* Themeing: In order to have an homogeneous color theme on the whole system I use `Pywal`. It allows me to generate palettes on the fly based on built-in themes or predominant color of an image. And most of the components above are configured to consume these palettes. How awesome.

## Dotfiles Management
I use a GNU/Linux environment on almost every computer that I use wheter at work or at home. Having the same configuration on all these environments is really a must in order to be efficient. And after having been through the hassle of re-installing and re-configuring my systems for a great number of times I finally looked for a solution that could ease this process but also help me synchronize my configurations accross systems.
I found out about dotfiles managers and one caught my interest. **Y**et **A**nother **D**otfiles **M**anager or `yadm` is a tool leveraging `git` functionnalities to offer a simple yet very efficient way of managing dotfiles.

## Install
If you want to test this setup please refer to my [dotfiles repo](https://github.com/simonkeyd/dotfiles)

<p align="center">
  <img src="icon.png" alt="Project Logo" width="21%">
</p>

# Uptime Kuma for StartOS

[Uptime Kuma](https://github.com/louislam/uptime-kuma) is an easy-to-use self-hosted monitoring tool.

This repository creates the `s9pk` package that is installed to run Uptime Kuma on [StartOS](https://github.com/Start9Labs/start-os/). Learn more about service packaging in the [Developer Docs](https://start9.com/latest/developer-docs/).

## Dependencies

Install the system dependencies below to build this project by following the instructions in the provided links. You can also find detailed steps to setup your environment in the service packaging [documentation](https://docs.start9.com/latest/developer-docs/packaging#development-environment).

- [docker](https://docs.docker.com/get-docker)
- [docker-buildx](https://docs.docker.com/buildx/working-with-buildx/)
- [yq](https://mikefarah.gitbook.io/yq)
- [deno](https://deno.land/)
- [make](https://www.gnu.org/software/make/)
- [start-sdk](https://github.com/Start9Labs/start-os/tree/sdk)

## Cloning

Clone the Webtop package repository locally.

```
git clone git@github.com:remcoros/uptime-kuma-startos.git
cd uptime-kuma-startos
```

## Building

To build the service as a universal package, run the following command:

```
make
```

Alternatively the package can be built for individual architectures by specifying the architecture as follows:

```
make x86
```

or

```
make arm
```

## Installing (on StartOS)

Before installation, define `host: https://server-name.local` in your `~/.embassy/config.yaml` config file then run the following commands to determine successful install:

> Change server-name.local to your Start9 server address

```
start-cli auth login
#Enter your StartOS password
make install
```

**Tip:** You can also install the uptime-kuma.s9pk by sideloading it under the **StartOS > System > Sideload a Service** section.

## Verify Install

Go to your StartOS Services page, select **Uptime Kuma**, configure and start the service.

**Done!**

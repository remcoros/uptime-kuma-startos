# Uptime Kuma Instructions

Uptime Kuma has no configuration options in StartOS.

When opening the user interface for the first time, you'll have to create the admin user. 
    
    Make sure to store this username and password somewhere safe, there is currently no reset password option.

Visit the [Uptime Kuma wiki](https://github.com/louislam/uptime-kuma/wiki) for a list of features and further instructions on how to setup monitors and status pages.

## How to monitor TOR (.onion) services?

To monitor TOR hidden services (.onion URLs) you can use the built-in TOR support of StartOS. 

Follow these steps to create a new proxy in Uptime Kuma:

- Log in to Uptime Kuma
- Go to 'Settings' (top right menu)
- Go to 'Proxies' and click 'Setup Proxy'
- Use the following settings:
  - Proxy Protocol: `SOCKS v5 (+ DNS)`
  - Server Address: `embassy`
  - Port: `9050`
  - Enabled: `on`

When adding or editing monitors, you can now select this new proxy: `embassy:9050 (socks5h)`

You only have to create this proxy once and can then use it for all your '.onion' HTTP(s) monitors.

Happy monitoring!

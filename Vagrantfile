# Vagrant file for Coderhouse course - FE3 AngularJS

Vagrant.configure("2") do |config|
    config.vm.box = "debian/jessie64"
    config.vm.hostname = "angularjs"
    config.vm.network :private_network, ip: "10.10.1.2"
    config.vm.network :forwarded_port, guest: 80, host: 9090
    config.vm.provision :shell, :path => "provision.sh"
    config.vm.synced_folder "/Users/aurso/Desktop/workspace/pessoais/Coderhouse/", "/var/www/html", nfs: true

    config.vm.provider :virtualbox do |vb|
        vb.customize [
            "modifyvm", :id,
            "--cpuexecutioncap", "50",
            "--memory", "256",
            "--cpus", "1"
        ]
    end
end

server {
    server_name arm2.wibudev.com;
    location / {
        proxy_pass http://localhost:3014;
    }
}


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Update
```bash
cd portfolio
git pull origin main
npm run build # should export files in out dir
sudo rm -rf /var/www/html/*
sudo cp -r out/* /var/www/html
sudo systemctl restart nginx
```

## Deploy on EC2
### 1. Prepare File
```bash
npm run build
npm run export
```

### 2. Create an EC2 Instance

### 3. Install & Set Up Web Server
```bash
# For Ubuntu
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

sudo apt install git -y
git clone https://github.com/hnzhou16/portfolio.git
cd portfolio
npm install --include=dev
npm run build
sudo cp -r out/* /var/www/html
sudo chown -R www-data:www-data /var/www/html

# Enable & start nginx:
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# Https
sudo nano /etc/nginx/sites-available/portfolio
sudo nano /etc/nginx/sites-available/default

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
    
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        root /var/www/html;
        access_log off;
        expires 1M;
    }
}



sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d hangningzhou.com -d www.hangningzhou.com
```


## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
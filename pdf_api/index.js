const ejs = require('ejs');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Read the JSON data
const data = {
    "message": {
        "host_list": [
            {
                "_id": "65fa83a46867d17e1a6600a8",
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "ZYBISYS-ZOOMVIEW-WINDOW-TEST-SRV",
                "host_lan_ip": "10.192.1.79",
                "agent_version": "v1.0.13",
                "host_os": "windows",
                "host_kernel": "windows",
                "os_version": "Microsoft Windows Server 2019 Datacenter",
                "kernel_architecture": "amd64",
                "kernel_version": "10.0.17763 N/A Build 17763",
                "uptime": "39 days, 2 hours, 15 minutes, and 41 seconds",
                "age": "2024-08-14 12:47:00",
                "age_timestamp": 1723619820752,
                "status": 1,
                "cpu": 39.25,
                "disk": 59.56,
                "memory": 81,
                "bandwidth": 0
            },
            {
                "_id": "666b0643089882c3537e089a",
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "ZCS-SERVER",
                "host_lan_ip": "10.192.1.77",
                "agent_version": "v1.0.13",
                "host_os": "windows",
                "host_kernel": "windows",
                "os_version": "Microsoft Windows Server 2019 Datacenter",
                "kernel_architecture": "amd64",
                "kernel_version": "10.0.17763 N/A Build 17763",
                "uptime": "26 days, 9 hours, 17 minutes, and 44 seconds",
                "age": "2024-08-14 12:47:00",
                "age_timestamp": 1723619820752,
                "status": 1,
                "cpu": 62.11,
                "disk": 35.91,
                "memory": 83,
                "bandwidth": 0.01
            },
            {
                "_id": "666c6653089882c3532ca738",
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "zcsit",
                "host_lan_ip": "10.192.1.55",
                "agent_version": "v1.0.13",
                "host_os": "linux",
                "host_kernel": "linux",
                "os_version": "Ubuntu 22.04.4 LTS",
                "kernel_architecture": "amd64",
                "kernel_version": "-",
                "uptime": "17d 19h 42m 39s",
                "age": "2024-08-14 12:47:00",
                "age_timestamp": 1723619820752,
                "status": 1,
                "cpu": 1,
                "disk": 41.16,
                "memory": 17.23,
                "bandwidth": 0
            },
            {
                "_id": "667bed2a089882c3534d3c6a",
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "localhost.localdomain",
                "host_lan_ip": "172.24.9.90",
                "agent_version": "v1.0.11",
                "host_os": "linux",
                "host_kernel": "linux",
                "os_version": "CentOS Linux 7 (Core)",
                "kernel_architecture": "amd64",
                "kernel_version": "3.10.0-1160.66.1.el7.x86_64",
                "uptime": "4023207",
                "age": "2024-08-14 12:47:00",
                "age_timestamp": 1723619820752,
                "status": 1,
                "cpu": 50.46,
                "disk": 96.3,
                "memory": 47.14,
                "bandwidth": 1.15
            },
            {
                "_id": "6688f94fb103a4e334ec90a3",
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "ubuntu-server",
                "host_lan_ip": "10.192.1.70",
                "agent_version": "v1.0.13",
                "host_os": "linux",
                "host_kernel": "linux",
                "os_version": "Ubuntu 20.04.6 LTS",
                "kernel_architecture": "amd64",
                "kernel_version": "-",
                "uptime": "38d 13h 11m 33s",
                "age": "2024-08-14 12:47:00",
                "age_timestamp": 1723619820752,
                "status": 1,
                "cpu": 29.32,
                "disk": 49.89,
                "memory": 50.52,
                "bandwidth": 0.05
            },
            {
                "_id": "66a0c0cab103a4e3343f295c",
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "WIN-KDPF1GGMQHI",
                "host_lan_ip": "192.168.1.75",
                "agent_version": "v1.0.13",
                "host_os": "windows",
                "host_kernel": "windows",
                "os_version": "Microsoft Windows Server 2019 Datacenter Evaluation",
                "kernel_architecture": "amd64",
                "kernel_version": "10.0.17763 N/A Build 17763",
                "uptime": "0 days, 1 hours, 0 minutes, and 5 seconds",
                "age": "2024-08-14 12:47:00",
                "age_timestamp": 1723619820752,
                "status": 1,
                "cpu": 33.1,
                "disk": 45.64,
                "memory": 40,
                "bandwidth": 0
            },
            {
                "_id": "6688f94fb103a4e334ec90a5",
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "ZYBISYS-ZOOMVIEW-UBUNTU-TEST-SRV-04",
                "host_lan_ip": "10.192.1.76",
                "agent_version": "v1.0.9",
                "host_os": "linux",
                "host_kernel": "",
                "os_version": "",
                "kernel_architecture": "",
                "kernel_version": "",
                "uptime": "",
                "age": "2024-08-14 00:00:00",
                "age_timestamp": 1723573800447,
                "status": 0,
                "cpu": "-",
                "disk": "-",
                "memory": "-",
                "bandwidth": "-"
            },
            {
                "_id": "66ab819299cc7fda3ad11b95",
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "ZCSU004-ZL",
                "host_lan_ip": "192.168.2.54",
                "agent_version": "v1.0.13",
                "host_os": "windows",
                "host_kernel": "windows",
                "os_version": "Microsoft Windows 11 Pro",
                "kernel_architecture": "amd64",
                "kernel_version": "10.0.22631 N/A Build 22631",
                "uptime": "1 days, 9 hours, 34 minutes, and 29 seconds",
                "age": "2024-08-01 18:07:38",
                "age_timestamp": 1722515858540,
                "status": 0,
                "cpu": "-",
                "disk": "-",
                "memory": "-",
                "bandwidth": "-"
            }
        ],
        "customer_status_count_active": 6,
        "customer_status_count_inactive": 2,
        "os_status_count_active": {
            "windows": 3,
            "linux": 3
        },
        "os_status_count_inactive": {
            "linux": 1,
            "windows": 1
        },
        "LogFilter": [
            {
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "ubuntu-server",
                "tag_name": "coc_log",
                "file_path": "/var/log/nginx/access.log",
                "log_usage": 80151947
            },
            {
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "ZCS-SERVER",
                "tag_name": "testing",
                "file_path": "C:\\nginx-1.27.0\\nginx-1.27.0\\logs/error.txt",
                "log_usage": 0
            },
            {
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "WIN-KDPF1GGMQHI",
                "tag_name": "file",
                "file_path": "/log/file.txt",
                "log_usage": 0
            },
            {
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "ubuntu-server",
                "tag_name": "duplicatepath",
                "file_path": "/var/log.txt",
                "log_usage": 0
            },
            {
                "customer_id": "65f980efdd1a8b42145b50ca",
                "host_name": "WIN-KDPF1GGMQHI",
                "tag_name": "tagname",
                "file_path": "log.txt",
                "log_usage": 0
            }
        ],
        "total_customer_host_count": 8,
        "total_overall_services": 143,
        "customer_overall_services": [
            {
                "status": "OK",
                "service_count": 111
            },
            {
                "status": "CRITICAL",
                "service_count": 24
            },
            {
                "status": "WARNING",
                "service_count": 8
            }
        ]
    }
};

// Path to the EJS template
const templatePath = path.join(__dirname, 'template.ejs');

// Function to generate PDF
async function generatePDF() {
    // Render the EJS template to HTML
    const html = await ejs.renderFile(templatePath, { message: data.message });

    // Launch Puppeteer and generate PDF
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const pdfBuffer = await page.pdf({ format: 'A4' });

    // Save PDF to file
    fs.writeFileSync('report.pdf', pdfBuffer);

    await browser.close();
}

generatePDF().then(() => {
    console.log('PDF generated successfully');
}).catch(err => {
    console.error('Error generating PDF:', err);
});

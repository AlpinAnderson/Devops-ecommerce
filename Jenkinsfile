pipeline {
    agent any

    environment {
        // Anda bisa menambahkan variabel lingkungan di sini
        PROJECT_DIR = 'D:/Devops-ecommerce'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout kode sumber dari repository
                git 'https://github.com/username/repository.git'
            }
        }

        stage('Build') {
            steps {
                // Menjalankan build (misalnya, jika menggunakan Maven)
                script {
                    // Misalnya untuk aplikasi Java dengan Maven
                    sh 'mvn clean install'
                }
            }
        }

        stage('Test') {
            steps {
                // Menjalankan unit test
                script {
                    // Misalnya, menggunakan Maven untuk menjalankan test
                    sh 'mvn test'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Proses deploy aplikasi (misalnya, ke Kubernetes)
                script {
                    // Misalnya, deploy menggunakan kubectl
                    sh 'kubectl apply -f deployment.yaml'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}

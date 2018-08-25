pipeline {
    agent {
        docker { image 'node:8-jessie' }
    }
    stages {
        stage('develop') {
            steps {
                sh 'npm install'
            }
        }
    }
}
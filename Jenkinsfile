pipeline {
  agent none
  stages {
    stage('develop') {
      agent {
        docker {
          image 'node:8'
          args '-p 3000:3000'
        }

      }
      steps {
        sh 'npm install'
      }
    }
  }
}
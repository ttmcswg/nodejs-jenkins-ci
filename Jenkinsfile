pipeline {
  agent {
    docker {
      image 'node:8-jessie'
      args '-p 3000:3000'
    }
    
  }
  stages {
    stage('develop') {
      agent {
        docker {
          image 'node:8-jessie'
          args '-p 3000:3000'
        }
        
      }
      steps {
        sh 'npm install'
      }
    }
  }
}
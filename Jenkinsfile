pipeline {
  agent any
  stages {
    stage('test') {
      parallel {
        stage('test') {
          steps {
            echo 'Testes'
          }
        }
        stage('deploy') {
          steps {
            sh 'echo "executando deploy"'
          }
        }
      }
    }
  }
}
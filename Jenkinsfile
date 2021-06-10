pipeline {
    agent { docker { image 'golang' } }
    stages {
        stage('build') {
            steps {
		    sh 'yarn build'
		    sh 'echo "Hello World"'
            sh 'go version'
            }
        }
    }
}

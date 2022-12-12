class Todomi {
  //properties
  protocol;
  _ipAddress;
  port;
  endpointPath;
  //constructor
  constructor(protocol, ipAddress, port, endpointPath) {
    this.protocol = protocol;
    this.getIpAddress = ipAddress;
    this.port = port;
    this.endpointPath = endpointPath;
  }

  //methods
  get getIpAddress() {
    return this._ipAddress;
  }

  set getIpAddress(value) {
    value === '127.0.0.1' && (value = 'localhost');

    this._ipAddress = value;
  }
    
    findAllArticles = async () => {
        try {
            const response = await fetch(`${this.protocol}://${this.getIpAddress}:${this.port}/api/v1/${this.endpointPath}`);
    
            if (!response.ok) throw new Error('No result found');

            const result = await response.json();
    
            return result;
            
        } catch (err) {
            console.error(err.message);
        }
  } 
}

export default Todomi;

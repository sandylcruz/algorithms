/*
Given a valid (IPv4) IP address, return a defanged 
version of that IP address.
*/

function defangIP(address) {
  const splitAddress = address.split(".");
  return splitAddress.join("[.]");
}

function defangIP(address) {
  const splitAddress = address.split(".");
  let defangedString = "";

  for (let i = 0; i < splitAddress.length; i++) {
    let newSegment = (splitAddress[i] += "[.]");
    defangedString += newSegment;
  }

  return defangedString;
}

console.log(defangIP("255.100.50.0"));

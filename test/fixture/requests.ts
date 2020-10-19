// https://toolslick.com/conversion/data/messagepack-to-json
// {
//   "space": "AgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICE=",
//   "agent": "9vaMQHtbl9seMuFElbuNHOkLg6sHIyGRYsbwe0a84Ag=",
//   "urls": [
//     "https://example.com",
//     "https://foo.com"
//   ],
//   "signed_at_ms": 1602767728019
// }
export const aliceVaporPostBody = Uint8Array.from([
  132,165,115,112,97,99,101,196,32,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,165,97,103,101,110,116,196,32,246,246,140,64,123,91,151,219,30,50,225,68,149,187,141,28,233,11,131,171,7,35,33,145,98,198,240,123,70,188,224,8,164,117,114,108,115,146,179,104,116,116,112,115,58,47,47,101,120,97,109,112,108,101,46,99,111,109,175,104,116,116,112,115,58,47,47,102,111,111,46,99,111,109,172,115,105,103,110,101,100,95,97,116,95,109,115,207,0,0,1,117,44,102,173,147
])

// Same as above but the first byte is 0.
export const aliceVaporPostBodyCorrupted = Uint8Array.from([
  0,165,115,112,97,99,101,196,32,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,165,97,103,101,110,116,196,32,246,246,140,64,123,91,151,219,30,50,225,68,149,187,141,28,233,11,131,171,7,35,33,145,98,198,240,123,70,188,224,8,164,117,114,108,115,146,179,104,116,116,112,115,58,47,47,101,120,97,109,112,108,101,46,99,111,109,175,104,116,116,112,115,58,47,47,102,111,111,46,99,111,109,172,115,105,103,110,101,100,95,97,116,95,109,115,207,0,0,1,117,44,102,173,147
])

// This has an additional malicious property 'bad' that represents an agent
// attempting to smuggle extra data into our kv store or other shenanigans.
// {
//   "space": "AgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICE=",
//   "agent": "9vaMQHtbl9seMuFElbuNHOkLg6sHIyGRYsbwe0a84Ag=",
//   "urls": [
//     "https://example.com",
//     "https://foo.com"
//   ],
//   "signed_at_ms": 1602767728019,
//   "bad": true
// }
export const aliceVaporPostBodyMaliciousProperty = Uint8Array.from([
 133,165,115,112,97,99,101,196,32,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
 20,21,22,23,24,25,26,27,28,29,30,31,32,33,165,97,103,101,110,116,196,32,246,
 246,140,64,123,91,151,219,30,50,225,68,149,187,141,28,233,11,131,171,7,35,33,
 145,98,198,240,123,70,188,224,8,164,117,114,108,115,146,179,104,116,116,112,
 115,58,47,47,101,120,97,109,112,108,101,46,99,111,109,175,104,116,116,112,115,
 58,47,47,102,111,111,46,99,111,109,172,115,105,103,110,101,100,95,97,116,95,
 109,115,207,0,0,1,117,44,102,173,147,163,98,97,100,195
])

import React from 'react';
import { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Carousel_Bootstrap extends Component {
    render() {
        return(
            <Carousel className="container text-center">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/7_4sx-IcwRLhA5eykDAYRIH_MlU3BOGLpTJUz44hSysfHFIdUN8PKpqEcalY5ren7o-bUDEEYCjj3slRLcUnJrfR9cF0aZJW8IE4j2BdJn1N-12V8ALUl7aBmLbRuHxD8v5MQHhhqmb8lG9Q8TN8C3L9XSNF3kaI4RVgqHTDljygHFuj_sRNKbXFg3Kki6w60ZhmrFcjgn7ZLJbOAzXK57Xr17X9yba0I8djWX8W8ZRrbXNtm6Qk7imUQnMxN1V3zx1QJZ8xCO-rnv82Id3KRBwlfFUktKWDsucx_bW-c-tfm2ExMjYwuld2gUFIeJntZ3z6G3yh82SBTYrnC7F7pMrEEaSNOY9y1Uoc69sp6cA0Svu9jvMNHrJN9yyjagIiOlXlIQ7d0Lz-3FubGydASAy-9-DmhG1GkjdRaUKhjF2ee5K9EvyG11MrscL7BdLmoJthwk25_Mp_9hkux3qFSEifuldyHVEGWVCTyys-WWK7kIJkjZPbtU3NPQSSiJB3OtogjYrMZC14b-FtDAKry0Bpb-oHp5pbeybiIxPYPcojGZY6ZbsBGgB7wvttKYEpVOAlMV1HN0nPkMZOaVV4euGNZKVQ3zCGcf9Qk6LtENcwqMIydoYu6hwqog_4_w6Wxiah8W2et0YukqVOu80SzvwYW-003m2VmOVAWLNOPJlswXugggLeUQPMZ66y=s1624-w1624-h913-no"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Portfolio</h3>
                <p>Projects that I have done</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/t9dutrS8EAkflwbUwESUhgx7xVWy5QDo9oJaZcoVPEpWWy2KASaqJsPXhAELBPXrAP-OnXdw3hQCwc7YhTczlZKaaQE0G2RQLyMbhLRDc7fHko49zImc6SQ8E-e4XEpSCU47L4dBCs6UvGW8z8x4ApNvHL32yD-3z32anBvbxfJUBkiSnLOnDcYQzNFy33KD0puIkbgKsicDOnB7zrHWfB7hmrdRjW45JqF0qlKAVx1C8L7nHfWmf_ce7WWtFWfAHe2Vcf4---IYv9qAzPc0vPGcnC0SUE_qGjkNNXb5AiSBTM3Z3g5u20Ml8tvmQkSkOBIUK664cIxBfLIcq-QMf54aM2SrtycVxDK8WSc9ij6qEhWDwEqdP0VUxtA549d9iG9-Mbjhv3Ei56Cn4w1tj4CKnj6fyxFsRXc4oTDlFoV__93cJDjDwWt6bBNpuHvakWC6sUtHxN_gNR2TdBmXErCfx-eziXwb55FMG0vD1tJc1U0xCZJCMaOfq8VLsbcT8X-piz0QL0Sddi0FPznyvJyjCtUFr8bkoJo26nvDgkMixFunsOKairzB3LeaDsBst6ImUTQiiHgR3mC746tQW95sS5HaCX-WCltiEHbmN91w1vePctpOAGXcZ7VkqKqoPlf_Fu8UAyjufFEspbhVrEYnbh4XWPH_JvY2HO2nvBEce_ZfUQ-JKwk=w1629-h916-no" class="d-block w-100"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Data Science</h3>
                <p>A field that uses scientific methods, algorithms and systems to extract insights from data.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/cVuD-UHLCH7iXfYtK0eA1BxPCZYuflDrIEb_DBBj8HzuWUHfh8mBamMyv208RsQDvrpdUpBbVwPoYhtfAw2Z9JWHeUlLqVpLsAup6ko_P5_rSDDMp5trd-9eITS0R9XvAXFVxpUB1ZCBzzpuLxjBrt4lpU_vkNKZtb3rbAk_dKUSBwNBAIrXOm9eMeNsZmfVz8xXfWkIuVRNFWbVvq9oSthvNF9lMDJF73vEAmU1yj_B7WcgujeqoCqRtXDvzQOMcrWbF6XnjE5CrclsLO_9dppXlX5X-bXQMEE-zxPzmYnwIguk0G1xHkxJx5oy6_n5YAlL_fvLd3G1H5bobrv0X-eI3Kso92xL628E-CAw8Av2AjAzFu4s-iC4WSHT2_ulE8rXb2vqmO9GcVCV1dTlTrRe6iTvqEKBt1mKvRSQnaImfLs-tInAWKPn_HLr7WovQWuvOKlptad5bZSq6mqzy40HDGJgRMiDYs9zQzoWGdk2R3OIWksNiSZXKxtHQv5Jd1ZiKPgZsHMYWJlqzbXyVkHrkpukk1O74sPxrO2dIcN_Fr-0awNY6jptBqlyMAyNiUxld6l1ZvZuFkaY6AlRW3zgHb6hSK6g_Qb17a7qhT4Lp9f-Dm8YiRwwPmG7yszzWY2X0U8mkBXi21UVHAVZegRcl2Vv-Vak30BL2rGi9FYL9Ve4zHGLCMQ=w960-h540-no"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Math</h3>
                <p>Dealing with numbers (usually).</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        )
    }
}

export default Carousel_Bootstrap
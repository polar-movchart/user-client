const KakaoLogin = () => {
    const restApiKey = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const redirectUrl = "http://localhost:8082/api/v1/users/kakao/login/callback";

    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUrl}&response_type=code`;
    const handleLogin = () => {
        window.location.href = kakaoUrl
    }
    return (
        <>
            <button onClick={handleLogin}>카카오 로그인</button>
        </>
    )
}

export default KakaoLogin;

import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        {/* Suggestions */}
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-picture-id1222755058?b=1&k=20&m=1222755058&s=612x612&w=0&h=J8yMsCnBtUoW0XcF0rE-KVGrI5YWJOjIbMx5Adb9Uwk="
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          {/* Second user */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-picture-id1222755058?b=1&k=20&m=1222755058&s=612x612&w=0&h=J8yMsCnBtUoW0XcF0rE-KVGrI5YWJOjIbMx5Adb9Uwk="
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        {/* Activities */}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-picture-id1222755058?b=1&k=20&m=1222755058&s=612x612&w=0&h=J8yMsCnBtUoW0XcF0rE-KVGrI5YWJOjIbMx5Adb9Uwk="
                alt=""
              />
              <p>
                <span>Jane Doe</span>
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          {/* 2nd user */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-picture-id1222755058?b=1&k=20&m=1222755058&s=612x612&w=0&h=J8yMsCnBtUoW0XcF0rE-KVGrI5YWJOjIbMx5Adb9Uwk="
                alt=""
              />
              <p>
                <span>Jane Doe</span>
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          {/* 3rd user */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-picture-id1222755058?b=1&k=20&m=1222755058&s=612x612&w=0&h=J8yMsCnBtUoW0XcF0rE-KVGrI5YWJOjIbMx5Adb9Uwk="
                alt=""
              />
              <p>
                <span>Jane Doe </span>
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        {/* Online Friends */}
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-picture-id1222755058?b=1&k=20&m=1222755058&s=612x612&w=0&h=J8yMsCnBtUoW0XcF0rE-KVGrI5YWJOjIbMx5Adb9Uwk="
                alt=""
              />
              <div className="online"></div>
              <span>Jane Doe</span>
            </div>
          </div>
          {/* Second user */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-picture-id1222755058?b=1&k=20&m=1222755058&s=612x612&w=0&h=J8yMsCnBtUoW0XcF0rE-KVGrI5YWJOjIbMx5Adb9Uwk="
                alt=""
              />
              <div className="online"></div>
              <span>Jane Doe</span>
            </div>
          </div>
          {/* Second user */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-picture-id1222755058?b=1&k=20&m=1222755058&s=612x612&w=0&h=J8yMsCnBtUoW0XcF0rE-KVGrI5YWJOjIbMx5Adb9Uwk="
                alt=""
              />
              <div className="online"></div>
              <span>Jane Doe</span>
            </div>
          </div>
          {/* Second user */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-picture-id1222755058?b=1&k=20&m=1222755058&s=612x612&w=0&h=J8yMsCnBtUoW0XcF0rE-KVGrI5YWJOjIbMx5Adb9Uwk="
                alt=""
              />
              <div className="online"></div>
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;

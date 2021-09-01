import { useQuery } from '@apollo/client';

import { TweetsQuery } from './services/TweetsQuery';

import {
  Container,
  Left,
  Right,
  ProfileList,
  Profile,
  Content,
} from './styles';

const Home = () => {
  const {data} = useQuery(TweetsQuery, {
    variables:{
      first:10,
    },
  })

  return (
    <Container>
      <Left>
        <h1>TweetsQl</h1>
        <h3>
          The new and the fast way to
          <br />
          {' '}
          tweet using Apollo & GraphQl
        </h3>
      </Left>
      <Right>
        <ProfileList>
          {data?.tweets?.edges?.map((t:any, index:number)=>(
            <Profile key={index}>
              <Content>
                <h2>{t.node.description}</h2>
                <p>{t.node.author.name}</p>
                <p>{t.node.createdAt}</p>
              </Content>
            </Profile>
          ))}
        </ProfileList>
      </Right>
    </Container>
  );
};

export default Home;

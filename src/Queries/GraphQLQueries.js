export const getPizzaCatIng = `
    fragment getPizzaCatIng on Pizza {
        id
        name
        composition
        img
        category {
            id
            name
        }
    }
`;

export const getPizzaByCat = (name) => {
  return `
        query {
            pizzas(where: {category : {name : "${name}"}}) {
                id
                name
                composition
                img
                category {
                    id
                    name
                }
            }
        }
    `;
};

export const getOnlyMailUser = (email) => {
  return `
        query {
            users(where : {email : "${email}"}){
                email,
            }
        }
    `;
};

export const getUser = (email) => {
  return `
        query {
            users(where : {email : "${email}"}){
                id
                email
                password
                role
                tokenActivate
            }
        }
    `;
};

export const getCurrentUser = (email) => {
  return `
        query {
            users(where : {email : "${email}"}){
                id
                firstname
                lastname
                address
                zip
                city
                tel
                email
            }
        }
    `;
};

export const getUserByActivateToken = (token) => {
  return `
        query {
            users(where: {tokenActivate: "${token}"}){
                id
                email
                tokenActivate
            }
        }
    `;
};

export const getUserByResetToken = (token) => {
  return `
        query {
            users(where: {tokenResetPassword: "${token}"}){
                id 
                email
                tokenResetPassword
            }
        }
    `;
};

export const getOrderWithUser = `
    fragment getOrderWithUser on Order {
        id
        price
        date
        status
        user {
            id
            lastname
            firstname
            tel
        }
        content
    }
`;

export const getOrderByUser = (id) => {
  return `
        query {
            orders(where: {user : {id : "${id}"}}) {
                id
                price
                date
                status
                content
            }
        }
    `;
};

export const getPromoByName = (name) => {
  return `
        query {
          promoes(where: {name : "${name}"}) {
            id
            name
            amount
          }
        }
    `;
};

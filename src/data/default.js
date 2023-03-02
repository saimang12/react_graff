export const DEFAULT = {
    company: 'Graff France',
    tel: '33 (1) 83 75 54 54',
    address: 'Headquarters 237 rue Saint-Honore Paris 75001',
}

export const DEFAULT_CONTENTS = [
    { id: 1, title: '01.JEWELLERY COLLECTION', description: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷' },
    { id: 2, title: '02.JEWELLERY COLLECTION', description: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷' },
    { id: 3, title: '03.JEWELLERY COLLECTION', description: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷' },
]

export const NAV = [
    {
        id: 1, title: '하이주얼리', link: '/',
        submenu: [
            { title: '01하이주얼리', link: '/sub01' },
            { title: '02하이주얼리', link: '/sub02' },
            { title: '03하이주얼리', link: '/sub03' },
        ]
    },
    {
        id: 2, title: '주얼리 컬렉션', link: '/',
        submenu: [
            { title: '01주얼리 컬렉션', link: '/sub01' },
            { title: '02주얼리 컬렉션', link: '/sub02' },
            { title: '03주얼리 컬렉션', link: '/sub03' },
        ]
    },
    {
        id: 3, title: '컬렉션 & 브라이덜', link: '/',
    },
    {
        id: 4, title: '웨딩주얼리', link: '/',
    },
    {
        id: 5, title: '특별한 솔리테어', link: '/',
    },
]
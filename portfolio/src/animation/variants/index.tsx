export const firstTitleVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'tween',
      bounce: 0.4,
      duration: 1.5,
      delay: 1,
    },
  },
};

export const secondTitleVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'tween',
      bounce: 0.4,
      duration: 1.5,
      delay: 1.5,
    },
  },
};

export const stackIconsVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'tween',
      bounce: 0.4,
      duration: 2,
      delay: 2,
    },
  },
};

export const bounceVariant = {
  offscreen: {
    scale : 0
  },
  onscreen : {
    scale : [ .5 , 1],
    transition : {
      type : 'tween',
      duration : 1,
      delay : .3
    }
  }
};

export const fadeInUpVariant = {
  offscreen : {
    y : 150,
    opacity : 0
  },
  onscreen : {
    y : 0,
    opacity : 1,
    transition : {
      type : 'tween',
      duration : 1,
      delay: .2
    }
  }
};

export const fadeInRightVariant = {
  offscreen : {
    x : 150,
    opacity : 0
  },
  onscreen : {
    x : 0,
    opacity : 1,
    transition : {
      type : 'tween',
      duration : 1,
      delay: .2
    }
  }
};

export  const fadeInLeftVariant = {
  offscreen : {
    x : -150,
    opacity : 0
  },
  onscreen : {
    x : 0,
    opacity : 1,
    transition : {
      type : 'tween',
      duration : 1,
      delay: .2
    }
  }
};